'use client';

import UploadArea from '@/components/UploadArea';
import ControlPanel from '@/components/ControlPanel';
import DitherCanvas from '@/components/DitherCanvas';
import GlassCard from '@/components/GlassCard';
import { useDitherStore } from '@/store/useDitherStore';

export default function HomePage() {
  const { imageDataUrl, showTutorial, setShowTutorial } = useDitherStore();

  return (
    <main className="min-h-screen py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl bg-glassAccent backdrop-blur-xl 
                          flex items-center justify-center border border-white/20 shadow-glass">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="4" height="4" />
                <rect x="10" y="2" width="4" height="4" />
                <rect x="18" y="2" width="4" height="4" />
                <rect x="6" y="6" width="4" height="4" />
                <rect x="14" y="6" width="4" height="4" />
                <rect x="2" y="10" width="4" height="4" />
                <rect x="10" y="10" width="4" height="4" />
                <rect x="18" y="10" width="4" height="4" />
                <rect x="6" y="14" width="4" height="4" />
                <rect x="14" y="14" width="4" height="4" />
                <rect x="2" y="18" width="4" height="4" />
                <rect x="10" y="18" width="4" height="4" />
                <rect x="18" y="18" width="4" height="4" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            DitherLab
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Create pixel-perfect halftone and glitch art in your browser
          </p>
          <p className="text-sm text-white/50 mt-2">
            11 dithering algorithms • 28 shader effects • WebGL/GLSL • Real-time • No uploads
          </p>
        </div>

        {!imageDataUrl && (
          <>
            {/* Tutorial Card */}
            {showTutorial && (
              <GlassCard className="mb-8 animate-slide-up">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">Quick Start Guide</h3>
                  <button
                    onClick={() => setShowTutorial(false)}
                    className="glass-button p-2 rounded-lg text-white/70 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📤</span>
                    </div>
                    <h4 className="text-white font-medium mb-2">1. Upload Image</h4>
                    <p className="text-white/60 text-sm">
                      Drag & drop or click to upload any PNG, JPG, or WebP image
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <h4 className="text-white font-medium mb-2">2. Choose Style</h4>
                    <p className="text-white/60 text-sm">
                      Pick from 11 dithering algorithms or 28 shader effects (WebGL/GLSL)
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <h4 className="text-white font-medium mb-2">3. Fine-tune</h4>
                    <p className="text-white/60 text-sm">
                      Adjust brightness, contrast, color depth, and more
                    </p>
                  </div>
                </div>
              </GlassCard>
            )}

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <GlassCard className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Lightning Fast</h3>
                <p className="text-white/60 text-sm">Real-time processing with Canvas API & WebGL</p>
              </GlassCard>

              <GlassCard className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Private & Secure</h3>
                <p className="text-white/60 text-sm">All processing happens in your browser</p>
              </GlassCard>

              <GlassCard className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">39 Effects</h3>
                <p className="text-white/60 text-sm">11 dithering + 28 shaders (WebGL/GLSL)</p>
              </GlassCard>

              <GlassCard className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-glassAccent/40 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-1">Export Ready</h3>
                <p className="text-white/60 text-sm">Download as PNG or SVG</p>
              </GlassCard>
            </div>
          </>
        )}

        {/* Main Content */}
        <div className={imageDataUrl ? "grid grid-cols-1 lg:grid-cols-3 gap-6" : ""}>
          {/* Left Column - Upload & Controls */}
          <div className={imageDataUrl ? "lg:col-span-1 space-y-6" : ""}>
            <GlassCard className="animate-slide-up">
              <UploadArea />
            </GlassCard>
            {imageDataUrl && <ControlPanel />}
          </div>

          {/* Right Column - Canvas Preview */}
          {imageDataUrl && (
            <div className="lg:col-span-2">
              <DitherCanvas />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 animate-fade-in">
          <div className="glass-panel rounded-2xl p-6 inline-block">
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                WebGL + Canvas API
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                60fps Shaders
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                100% Private
              </span>
            </div>
            <div className="mt-4 text-white/40 text-xs">
              Built with Next.js 16, TypeScript, WebGL/GLSL, Tailwind CSS & Zustand
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
