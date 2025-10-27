'use client';

import React, { useState } from 'react';
import { useDitherStore } from '@/store/useDitherStore';
import GlassCard from './GlassCard';

export default function PresetManager() {
  const { presets, savePreset, loadPreset, deletePreset, settings } = useDitherStore();
  const [isOpen, setIsOpen] = useState(false);
  const [presetName, setPresetName] = useState('');
  const [showSaveDialog, setShowSaveDialog] = useState(false);

  const handleSave = () => {
    if (presetName.trim()) {
      savePreset(presetName.trim());
      setPresetName('');
      setShowSaveDialog(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="glass-button px-4 py-2 rounded-xl text-white text-sm font-medium
                 transition-all duration-200 flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
        Presets ({presets.length})
      </button>

      {/* Preset Manager Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setIsOpen(false)}>
          <GlassCard className="max-w-2xl w-full max-h-[80vh] overflow-hidden animate-scale-in"
                     onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Presets</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="glass-button p-2 rounded-xl text-white hover:bg-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <button
                onClick={() => setShowSaveDialog(!showSaveDialog)}
                className="w-full glass-button px-6 py-3 rounded-xl text-white font-medium
                         transition-all duration-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Save Current Settings
              </button>

              {showSaveDialog && (
                <div className="mt-4 flex gap-2">
                  <input
                    type="text"
                    value={presetName}
                    onChange={(e) => setPresetName(e.target.value)}
                    placeholder="Preset name..."
                    className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20
                             text-white placeholder-white/50 backdrop-blur-md
                             focus:outline-none focus:ring-2 focus:ring-glassAccent"
                    onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                    autoFocus
                  />
                  <button
                    onClick={handleSave}
                    className="glass-button px-6 py-2 rounded-xl text-white font-medium"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {presets.length === 0 ? (
                <div className="text-center text-white/60 py-8">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                  <p>No presets saved yet</p>
                  <p className="text-sm mt-2">Save your favorite settings for quick access</p>
                </div>
              ) : (
                presets.map((preset) => (
                  <div key={preset.timestamp}
                       className="glass-panel p-4 rounded-xl flex items-center justify-between
                                hover:bg-white/15 transition-all duration-200">
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{preset.name}</h3>
                      <p className="text-white/60 text-sm">
                        {preset.settings.algorithm} • {preset.settings.colorDepth} colors • {formatDate(preset.timestamp)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          loadPreset(preset);
                          setIsOpen(false);
                        }}
                        className="glass-button px-4 py-2 rounded-lg text-white text-sm font-medium"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => deletePreset(preset.timestamp)}
                        className="glass-button p-2 rounded-lg text-red-300 hover:text-red-400"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </GlassCard>
        </div>
      )}
    </>
  );
}
