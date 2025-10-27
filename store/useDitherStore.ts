import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type DitheringAlgorithm = 
  | 'floyd-steinberg' 
  | 'atkinson' 
  | 'bayer' 
  | 'random'
  | 'jarvis-judice-ninke'
  | 'stucki'
  | 'burkes'
  | 'sierra'
  | 'sierra-lite'
  | 'halftone'
  | 'pattern';

export type ColorMode = 'grayscale' | 'color';

export type FilterType = 
  | 'none'
  // Canvas 2D Filters
  | 'liquid-metal'
  | 'mesh-gradient'
  | 'static-mesh'
  | 'radial-gradient'
  | 'grain-gradient'
  | 'dot-orbit'
  | 'dot-grid'
  | 'warp'
  // WebGL GLSL Shaders
  | 'raymarching-spheres'
  | 'mandelbrot'
  | 'voronoi'
  | 'plasma'
  | 'kaleidoscope'
  | 'rgb-split'
  | 'glitch'
  | 'pixel-dither'
  | 'wave-distortion'
  | 'tunnel'
  | 'ripple'
  | 'oil-painting'
  | 'mosaic'
  | 'mosaic-tiles'
  | 'pixelate'
  | 'chromatic'
  | 'heatmap'
  | 'vignette'
  | 'swirl'
  | 'mirror';

export interface DitherSettings {
  algorithm: DitheringAlgorithm;
  colorDepth: number;
  contrast: number;
  brightness: number;
  colorMode: ColorMode;
  hue: number;
  saturation: number;
  filter: FilterType;
}

export interface Preset {
  name: string;
  settings: DitherSettings;
  timestamp: number;
}

interface DitherStore {
  // Image state
  originalImage: HTMLImageElement | null;
  imageDataUrl: string | null;
  
  // Settings
  settings: DitherSettings;
  
  // Processing state
  isProcessing: boolean;
  
  // Presets
  presets: Preset[];
  
  // History
  history: DitherSettings[];
  historyIndex: number;
  
  // UI State
  showComparison: boolean;
  showTutorial: boolean;
  
  // Actions
  setOriginalImage: (image: HTMLImageElement, dataUrl: string) => void;
  updateSettings: (settings: Partial<DitherSettings>) => void;
  setIsProcessing: (isProcessing: boolean) => void;
  reset: () => void;
  
  // Preset actions
  savePreset: (name: string) => void;
  loadPreset: (preset: Preset) => void;
  deletePreset: (timestamp: number) => void;
  
  // History actions
  addToHistory: (settings: DitherSettings) => void;
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;
  
  // UI actions
  setShowComparison: (show: boolean) => void;
  setShowTutorial: (show: boolean) => void;
}

const defaultSettings: DitherSettings = {
  algorithm: 'floyd-steinberg',
  colorDepth: 2,
  contrast: 100,
  brightness: 100,
  colorMode: 'grayscale',
  hue: 0,
  saturation: 100,
  filter: 'none',
};

export const useDitherStore = create<DitherStore>()(
  persist(
    (set, get) => ({
      originalImage: null,
      imageDataUrl: null,
      settings: defaultSettings,
      isProcessing: false,
      presets: [],
      history: [defaultSettings],
      historyIndex: 0,
      showComparison: false,
      showTutorial: true,
      
      setOriginalImage: (image, dataUrl) => set({ 
        originalImage: image, 
        imageDataUrl: dataUrl 
      }),
      
      updateSettings: (newSettings) => {
        const updatedSettings = { ...get().settings, ...newSettings };
        set({ settings: updatedSettings });
        get().addToHistory(updatedSettings);
      },
      
      setIsProcessing: (isProcessing) => set({ isProcessing }),
      
      reset: () => set({
        originalImage: null,
        imageDataUrl: null,
        settings: defaultSettings,
        isProcessing: false,
        history: [defaultSettings],
        historyIndex: 0,
      }),
      
      // Preset management
      savePreset: (name) => {
        const preset: Preset = {
          name,
          settings: get().settings,
          timestamp: Date.now(),
        };
        set({ presets: [...get().presets, preset] });
      },
      
      loadPreset: (preset) => {
        set({ settings: preset.settings });
        get().addToHistory(preset.settings);
      },
      
      deletePreset: (timestamp) => {
        set({ presets: get().presets.filter(p => p.timestamp !== timestamp) });
      },
      
      // History management
      addToHistory: (settings) => {
        const { history, historyIndex } = get();
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(settings);
        
        // Limit history to 50 items
        if (newHistory.length > 50) {
          newHistory.shift();
        }
        
        set({
          history: newHistory,
          historyIndex: newHistory.length - 1,
        });
      },
      
      undo: () => {
        const { historyIndex, history } = get();
        if (historyIndex > 0) {
          const newIndex = historyIndex - 1;
          set({
            settings: history[newIndex],
            historyIndex: newIndex,
          });
        }
      },
      
      redo: () => {
        const { historyIndex, history } = get();
        if (historyIndex < history.length - 1) {
          const newIndex = historyIndex + 1;
          set({
            settings: history[newIndex],
            historyIndex: newIndex,
          });
        }
      },
      
      canUndo: () => get().historyIndex > 0,
      canRedo: () => get().historyIndex < get().history.length - 1,
      
      // UI state
      setShowComparison: (show) => set({ showComparison: show }),
      setShowTutorial: (show) => set({ showTutorial: show }),
    }),
    {
      name: 'ditherlab-storage',
      partialize: (state) => ({
        presets: state.presets,
        showTutorial: state.showTutorial,
      }),
    }
  )
);
