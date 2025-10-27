'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useDitherStore } from '@/store/useDitherStore';
import { applyDithering } from '@/lib/dithering';
import { animateWebGLShader, applyWebGLShader, isAnimatedShader } from '@/lib/shaders/shaderRenderer';
import { ShaderProgram } from '@/lib/shaders/ShaderProgram';
import GlassCard from './GlassCard';
import ComparisonSlider from './ComparisonSlider';
import PresetManager from './PresetManager';
import KeyboardShortcuts from './KeyboardShortcuts';

export default function DitherCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shaderProgramRef = useRef<ShaderProgram | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { 
    originalImage, 
    settings, 
    imageDataUrl, 
    showComparison,
    setShowComparison,
    isProcessing,
    setIsProcessing 
  } = useDitherStore();

  // WebGL shader list
  const webglShaders = [
    'raymarching-spheres', 'mandelbrot', 'voronoi', 'plasma', 'kaleidoscope',
    'rgb-split', 'glitch', 'pixel-dither', 'wave-distortion', 'tunnel',
    'ripple', 'oil-painting', 'mosaic', 'mosaic-tiles', 'pixelate',
    'chromatic', 'heatmap', 'vignette', 'swirl', 'mirror'
  ];
  
  const isWebGLShader = webglShaders.includes(settings.filter);
  const needsAnimation = isAnimatedShader(settings.filter);

  useEffect(() => {
    if (!originalImage || !canvasRef.current) return;

    // Cleanup previous shader
    if (shaderProgramRef.current) {
      shaderProgramRef.current.destroy();
      shaderProgramRef.current = null;
    }

    setIsProcessing(true);
    setError(null);

    const processImage = async () => {
      if (!canvasRef.current) return;

      try {
        if (isWebGLShader) {
          // Use WebGL shader
          const canvas = canvasRef.current;
          
          if (needsAnimation) {
            shaderProgramRef.current = animateWebGLShader(
              canvas,
              originalImage,
              settings.filter as any,
              settings
            );
          } else {
            shaderProgramRef.current = applyWebGLShader(
              canvas,
              originalImage,
              settings.filter as any,
              settings
            );
          }

          if (!shaderProgramRef.current) {
            throw new Error('WebGL shader failed to initialize');
          }
        } else {
          // Use Canvas 2D API
          await new Promise(resolve => {
            requestAnimationFrame(() => {
              if (canvasRef.current && originalImage) {
                applyDithering(canvasRef.current, originalImage, settings);
              }
              resolve(null);
            });
          });
        }
        
        setIsProcessing(false);
      } catch (err) {
        console.error('Processing error:', err);
        setError(err instanceof Error ? err.message : 'Processing failed');
        
        // Fallback to Canvas 2D
        if (canvasRef.current) {
          const tempSettings = { ...settings, filter: 'none' as any };
          applyDithering(canvasRef.current, originalImage, tempSettings);
        }
        
        setIsProcessing(false);
      }
    };

    processImage();

    return () => {
      if (shaderProgramRef.current) {
        shaderProgramRef.current.destroy();
        shaderProgramRef.current = null;
      }
    };
  }, [originalImage, settings, isWebGLShader, needsAnimation, setIsProcessing]);

  const handleDownload = () => {
    if (!canvasRef.current) return;

    const link = document.createElement('a');
    const effectName = settings.filter !== 'none' ? settings.filter : settings.algorithm;
    link.download = `ditherlab-${effectName}-${Date.now()}.png`;
    link.href = canvasRef.current.toDataURL('image/png');
    link.click();
  };

  const handleDownloadSVG = () => {
    if (!canvasRef.current || isWebGLShader) {
      alert('SVG export is only available for dithering algorithms');
      return;
    }

    const canvas = canvasRef.current;
    
    // Create a temporary 2D context to read pixels
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;
    
    tempCtx.drawImage(canvas, 0, 0);
    const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    
    let svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}">`;

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const i = (y * canvas.width + x) * 4;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        svgContent += `<rect x="${x}" y="${y}" width="1" height="1" fill="rgb(${r},${g},${b})"/>`;
      }
    }

    svgContent += '</svg>';

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const effectName = settings.filter !== 'none' ? settings.filter : settings.algorithm;
    link.download = `ditherlab-${effectName}-${Date.now()}.svg`;
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!imageDataUrl) return null;

  return (
    <>
      <GlassCard className="animate-slide-up">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 gap-3">
          <h2 className="text-2xl font-semibold text-white">Preview</h2>
          <div className="flex flex-wrap gap-3">
            <PresetManager />
            <KeyboardShortcuts />
            
            <button
              onClick={() => setShowComparison(!showComparison)}
              className={`glass-button px-4 py-2 rounded-xl text-white text-sm font-medium
                       transition-all duration-200 ${showComparison ? 'bg-glassAccent/60' : ''}`}
              title="Toggle Comparison (Space)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </button>
            
            <button
              onClick={toggleFullscreen}
              className="glass-button px-4 py-2 rounded-xl text-white text-sm font-medium
                       transition-all duration-200"
            >
              {isFullscreen ? 'Exit' : 'Fullscreen'}
            </button>
            <button
              onClick={handleDownload}
              className="glass-button px-4 py-2 rounded-xl text-white text-sm font-medium
                       transition-all duration-200 flex items-center gap-2"
              title="Download PNG (Ctrl+S)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              PNG
            </button>
            {!isWebGLShader && (
              <button
                onClick={handleDownloadSVG}
                className="glass-button px-4 py-2 rounded-xl text-white text-sm font-medium
                         transition-all duration-200 flex items-center gap-2"
                title="Download SVG (Ctrl+E)"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                SVG
              </button>
            )}
          </div>
        </div>

        {error && (
          <div className="mb-4 glass-panel p-4 rounded-xl border-2 border-red-500/50">
            <div className="flex items-center gap-2 text-red-300 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error} - Falling back to Canvas 2D
            </div>
          </div>
        )}

        {isProcessing && (
          <div className="mb-4 flex items-center gap-2 text-white/70 text-sm">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Processing{isWebGLShader ? ' with WebGL' : ''}...
          </div>
        )}

        {showComparison ? (
          <ComparisonSlider
            originalSrc={imageDataUrl}
            ditheredCanvas={canvasRef.current}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Original Image */}
            <div>
              <h3 className="text-lg font-medium text-white/80 mb-3">Original</h3>
              <div className="rounded-xl overflow-hidden bg-black/20 border border-white/10">
                <img 
                  src={imageDataUrl} 
                  alt="Original" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Processed Image */}
            <div>
              <h3 className="text-lg font-medium text-white/80 mb-3 flex items-center gap-2">
                Processed ({settings.filter !== 'none' ? settings.filter : settings.algorithm})
                {isWebGLShader && (
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-lg border border-green-500/30">
                    WebGL
                  </span>
                )}
              </h3>
              <div className="rounded-xl overflow-hidden bg-black/20 border border-white/10 relative">
                <canvas
                  ref={canvasRef}
                  className="w-full h-auto"
                  style={{ imageRendering: 'pixelated' }}
                />
                {needsAnimation && (
                  <div className="absolute top-2 right-2 glass-button px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    LIVE 60fps
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </GlassCard>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={toggleFullscreen}
        >
          <button
            className="absolute top-6 right-6 glass-button p-3 rounded-full text-white z-10 hover:scale-110 transition-transform"
            onClick={toggleFullscreen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-full max-h-full overflow-auto">
            {showComparison ? (
              <div className="w-[90vw] max-w-6xl">
                <ComparisonSlider
                  originalSrc={imageDataUrl}
                  ditheredCanvas={canvasRef.current}
                />
              </div>
            ) : (
              <canvas
                ref={canvasRef}
                className="max-w-full max-h-[90vh] w-auto h-auto shadow-2xl"
                style={{ imageRendering: 'pixelated' }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
