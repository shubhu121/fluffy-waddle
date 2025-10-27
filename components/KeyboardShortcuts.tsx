'use client';

import React, { useState } from 'react';
import GlassCard from './GlassCard';

export default function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  const shortcuts = [
    { key: 'Space', description: 'Toggle comparison view' },
    { key: 'Ctrl/⌘ + Z', description: 'Undo' },
    { key: 'Ctrl/⌘ + Shift + Z', description: 'Redo' },
    { key: 'Ctrl/⌘ + S', description: 'Download PNG' },
    { key: 'Ctrl/⌘ + E', description: 'Download SVG' },
    { key: 'Ctrl/⌘ + O', description: 'Open image' },
    { key: 'R', description: 'Reset settings' },
    { key: 'C', description: 'Toggle color mode' },
    { key: '?', description: 'Show keyboard shortcuts' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="glass-button p-2 rounded-xl text-white hover:bg-white/20
                 transition-all duration-200"
        title="Keyboard Shortcuts"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
             onClick={() => setIsOpen(false)}>
          <GlassCard className="max-w-lg w-full animate-scale-in"
                     onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white">Keyboard Shortcuts</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="glass-button p-2 rounded-xl text-white hover:bg-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-3">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <span className="text-white/80">{shortcut.description}</span>
                  <kbd className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg
                               text-white text-sm font-mono">
                    {shortcut.key}
                  </kbd>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      )}
    </>
  );
}
