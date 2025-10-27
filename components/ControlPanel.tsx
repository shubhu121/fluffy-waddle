'use client';

import React from 'react';
import { useDitherStore, DitheringAlgorithm, FilterType } from '@/store/useDitherStore';
import GlassCard from './GlassCard';

export default function ControlPanel() {
  const { settings, updateSettings, imageDataUrl, undo, redo, canUndo, canRedo } = useDitherStore();

  if (!imageDataUrl) return null;

  const algorithms: { value: DitheringAlgorithm; label: string; category: string }[] = [
    // Error Diffusion Algorithms
    { value: 'floyd-steinberg', label: 'Floyd–Steinberg', category: 'Error Diffusion' },
    { value: 'atkinson', label: 'Atkinson', category: 'Error Diffusion' },
    { value: 'jarvis-judice-ninke', label: 'Jarvis-Judice-Ninke', category: 'Error Diffusion' },
    { value: 'stucki', label: 'Stucki', category: 'Error Diffusion' },
    { value: 'burkes', label: 'Burkes', category: 'Error Diffusion' },
    { value: 'sierra', label: 'Sierra', category: 'Error Diffusion' },
    { value: 'sierra-lite', label: 'Sierra Lite', category: 'Error Diffusion' },
    
    // Ordered Dithering
    { value: 'bayer', label: 'Bayer Matrix', category: 'Ordered' },
    { value: 'pattern', label: 'Pattern / Crosshatch', category: 'Ordered' },
    
    // Special Effects
    { value: 'halftone', label: 'Halftone Dots', category: 'Special' },
    { value: 'random', label: 'Random Noise', category: 'Special' },
  ];

  const filters: { value: FilterType; label: string; category: string }[] = [
    { value: 'none', label: 'None (Use Dithering)', category: 'Dithering' },
    
    // Canvas 2D Effects
    { value: 'mesh-gradient', label: 'Mesh Gradient (Canvas)', category: 'Canvas 2D' },
    { value: 'static-mesh', label: 'Static Mesh', category: 'Canvas 2D' },
    { value: 'radial-gradient', label: 'Radial Gradient', category: 'Canvas 2D' },
    { value: 'grain-gradient', label: 'Grain Gradient', category: 'Canvas 2D' },
    { value: 'liquid-metal', label: 'Liquid Metal', category: 'Canvas 2D' },
    { value: 'dot-orbit', label: 'Dot Orbit', category: 'Canvas 2D' },
    { value: 'dot-grid', label: 'Dot Grid', category: 'Canvas 2D' },
    { value: 'warp', label: 'Warp', category: 'Canvas 2D' },
    
    // WebGL - Raytracing
    { value: 'raymarching-spheres', label: '🔮 Raymarched Spheres', category: 'WebGL - Raytracing' },
    
    // WebGL - Fractals & Patterns
    { value: 'mandelbrot', label: '🌀 Mandelbrot Set', category: 'WebGL - Fractals' },
    { value: 'voronoi', label: '🔶 Voronoi Cells', category: 'WebGL - Fractals' },
    { value: 'plasma', label: '⚡ Plasma Waves', category: 'WebGL - Fractals' },
    
    // WebGL - Distortion
    { value: 'tunnel', label: '🌊 Tunnel Effect', category: 'WebGL - Distortion' },
    { value: 'ripple', label: '💧 Ripple Effect', category: 'WebGL - Distortion' },
    { value: 'wave-distortion', label: '🌊 Wave Distortion', category: 'WebGL - Distortion' },
    { value: 'swirl', label: '🌀 Swirl Effect', category: 'WebGL - Distortion' },
    { value: 'kaleidoscope', label: '🔮 Kaleidoscope', category: 'WebGL - Distortion' },
    { value: 'mirror', label: '🪞 Mirror Effect', category: 'WebGL - Distortion' },
    
    // WebGL - Artistic
    { value: 'mosaic', label: '🎨 Voronoi Mosaic', category: 'WebGL - Artistic' },
    { value: 'mosaic-tiles', label: '🧩 Mosaic Tiles', category: 'WebGL - Artistic' },
    { value: 'oil-painting', label: '🖼️ Oil Painting', category: 'WebGL - Artistic' },
    { value: 'pixel-dither', label: '🎮 Pixel Dither', category: 'WebGL - Artistic' },
    
    // WebGL - Effects
    { value: 'rgb-split', label: '📺 RGB Split', category: 'WebGL - Effects' },
    { value: 'glitch', label: '📺 Glitch', category: 'WebGL - Effects' },
    { value: 'chromatic', label: '🌈 Chromatic Aberration', category: 'WebGL - Effects' },
    { value: 'heatmap', label: '🔥 Heatmap', category: 'WebGL - Effects' },
    { value: 'vignette', label: '🎞️ Vignette', category: 'WebGL - Effects' },
    { value: 'pixelate', label: '🔲 Pixelate', category: 'WebGL - Effects' },
  ];

  // Group by category
  const groupedAlgorithms = algorithms.reduce((acc, algo) => {
    if (!acc[algo.category]) acc[algo.category] = [];
    acc[algo.category].push(algo);
    return acc;
  }, {} as Record<string, typeof algorithms>);

  const groupedFilters = filters.reduce((acc, filter) => {
    if (!acc[filter.category]) acc[filter.category] = [];
    acc[filter.category].push(filter);
    return acc;
  }, {} as Record<string, typeof filters>);

  const isUsingFilter = settings.filter !== 'none';

  return (
    <GlassCard className="mb-6 animate-slide-up">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Controls</h2>
        <div className="flex gap-2">
          <button
            onClick={() => undo()}
            disabled={!canUndo()}
            className="glass-button p-2 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed"
            title="Undo (Ctrl+Z)"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </button>
          <button
            onClick={() => redo()}
            disabled={!canRedo()}
            className="glass-button p-2 rounded-lg text-white disabled:opacity-30 disabled:cursor-not-allowed"
            title="Redo (Ctrl+Shift+Z)"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="space-y-6">
        {/* Mode Toggle */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Processing Mode
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => updateSettings({ filter: 'none' })}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                !isUsingFilter
                  ? 'bg-glassAccent/60 text-white border-2 border-white/40'
                  : 'glass-button text-white/70'
              }`}
            >
              Dithering
            </button>
            <button
              onClick={() => updateSettings({ filter: 'heatmap' })}
              className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                isUsingFilter
                  ? 'bg-glassAccent/60 text-white border-2 border-white/40'
                  : 'glass-button text-white/70'
              }`}
            >
              Filters/Shaders
            </button>
          </div>
        </div>

        {/* Algorithm/Filter Selector */}
        {!isUsingFilter ? (
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Dithering Algorithm
            </label>
            <select
              value={settings.algorithm}
              onChange={(e) => updateSettings({ algorithm: e.target.value as DitheringAlgorithm })}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
                       text-white backdrop-blur-md
                       focus:outline-none focus:ring-2 focus:ring-glassAccent
                       transition-all duration-200"
            >
              {Object.entries(groupedAlgorithms).map(([category, algos]) => (
                <optgroup key={category} label={category} className="bg-gray-800">
                  {algos.map((algo) => (
                    <option key={algo.value} value={algo.value} className="bg-gray-900">
                      {algo.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Filter Effect
            </label>
            <select
              value={settings.filter}
              onChange={(e) => updateSettings({ filter: e.target.value as FilterType })}
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20
                       text-white backdrop-blur-md
                       focus:outline-none focus:ring-2 focus:ring-glassAccent
                       transition-all duration-200"
            >
              {Object.entries(groupedFilters).map(([category, filts]) => (
                <optgroup key={category} label={category} className="bg-gray-800">
                  {filts.map((filter) => (
                    <option key={filter.value} value={filter.value} className="bg-gray-900">
                      {filter.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>
        )}

        {/* Color Mode Toggle */}
        {!isUsingFilter && (
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Color Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => updateSettings({ colorMode: 'grayscale' })}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  settings.colorMode === 'grayscale'
                    ? 'bg-white/20 text-white border-2 border-white/40'
                    : 'glass-button text-white/70'
                }`}
              >
                Grayscale
              </button>
              <button
                onClick={() => updateSettings({ colorMode: 'color' })}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  settings.colorMode === 'color'
                    ? 'bg-white/20 text-white border-2 border-white/40'
                    : 'glass-button text-white/70'
                }`}
              >
                Color
              </button>
            </div>
          </div>
        )}

        {/* Color Depth Slider (only for dithering) */}
        {!isUsingFilter && (
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              Color Depth: {settings.colorDepth} colors
            </label>
            <input
              type="range"
              min="2"
              max="256"
              value={settings.colorDepth}
              onChange={(e) => updateSettings({ colorDepth: parseInt(e.target.value) })}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, 
                  rgba(138, 180, 248, 0.6) 0%, 
                  rgba(138, 180, 248, 0.6) ${((settings.colorDepth - 2) / 254) * 100}%, 
                  rgba(255, 255, 255, 0.2) ${((settings.colorDepth - 2) / 254) * 100}%, 
                  rgba(255, 255, 255, 0.2) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-white/50 mt-1">
              <span>2</span>
              <span>256</span>
            </div>
          </div>
        )}

        {/* Contrast Slider */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Contrast: {settings.contrast}%
          </label>
          <input
            type="range"
            min="0"
            max="200"
            value={settings.contrast}
            onChange={(e) => updateSettings({ contrast: parseInt(e.target.value) })}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, 
                rgba(138, 180, 248, 0.6) 0%, 
                rgba(138, 180, 248, 0.6) ${(settings.contrast / 200) * 100}%, 
                rgba(255, 255, 255, 0.2) ${(settings.contrast / 200) * 100}%, 
                rgba(255, 255, 255, 0.2) 100%)`
            }}
          />
        </div>

        {/* Brightness Slider */}
        <div>
          <label className="block text-sm font-medium text-white/80 mb-2">
            Brightness: {settings.brightness}%
          </label>
          <input
            type="range"
            min="0"
            max="200"
            value={settings.brightness}
            onChange={(e) => updateSettings({ brightness: parseInt(e.target.value) })}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, 
                rgba(138, 180, 248, 0.6) 0%, 
                rgba(138, 180, 248, 0.6) ${(settings.brightness / 200) * 100}%, 
                rgba(255, 255, 255, 0.2) ${(settings.brightness / 200) * 100}%, 
                rgba(255, 255, 255, 0.2) 100%)`
            }}
          />
        </div>

        {/* Color controls (only in color mode and not using filters) */}
        {settings.colorMode === 'color' && !isUsingFilter && (
          <>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Hue: {settings.hue}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={settings.hue}
                onChange={(e) => updateSettings({ hue: parseInt(e.target.value) })}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)'
                }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                Saturation: {settings.saturation}%
              </label>
              <input
                type="range"
                min="0"
                max="200"
                value={settings.saturation}
                onChange={(e) => updateSettings({ saturation: parseInt(e.target.value) })}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, 
                    rgba(138, 180, 248, 0.6) 0%, 
                    rgba(138, 180, 248, 0.6) ${(settings.saturation / 200) * 100}%, 
                    rgba(255, 255, 255, 0.2) ${(settings.saturation / 200) * 100}%, 
                    rgba(255, 255, 255, 0.2) 100%)`
                }}
              />
            </div>
          </>
        )}

        {/* Reset Button */}
        <button
          onClick={() => updateSettings({
            algorithm: 'floyd-steinberg',
            colorDepth: 2,
            contrast: 100,
            brightness: 100,
            colorMode: 'grayscale',
            hue: 0,
            saturation: 100,
            filter: 'none',
          })}
          className="w-full glass-button px-6 py-3 rounded-xl text-white font-medium
                   transition-all duration-200"
        >
          Reset to Defaults
        </button>
      </div>
    </GlassCard>
  );
}
