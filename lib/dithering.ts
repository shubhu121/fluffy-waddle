import { DitherSettings } from '@/store/useDitherStore';

// Utility function to apply brightness and contrast
function applyBrightnessContrast(
  data: Uint8ClampedArray,
  brightness: number,
  contrast: number
): void {
  const b = (brightness - 100) * 2.55;
  const c = (contrast - 100) / 100 + 1;
  
  for (let i = 0; i < data.length; i += 4) {
    // Apply contrast
    data[i] = c * (data[i] - 128) + 128;
    data[i + 1] = c * (data[i + 1] - 128) + 128;
    data[i + 2] = c * (data[i + 2] - 128) + 128;
    
    // Apply brightness
    data[i] += b;
    data[i + 1] += b;
    data[i + 2] += b;
  }
}

// Convert to grayscale
function toGrayscale(data: Uint8ClampedArray): void {
  for (let i = 0; i < data.length; i += 4) {
    const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    data[i] = data[i + 1] = data[i + 2] = gray;
  }
}

// Apply hue and saturation adjustments
function applyColorAdjustments(
  data: Uint8ClampedArray,
  hue: number,
  saturation: number
): void {
  const hueAdjust = hue / 360;
  const satAdjust = saturation / 100;
  
  for (let i = 0; i < data.length; i += 4) {
    let r = data[i] / 255;
    let g = data[i + 1] / 255;
    let b = data[i + 2] / 255;
    
    // Convert RGB to HSL
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
        case g: h = ((b - r) / d + 2) / 6; break;
        case b: h = ((r - g) / d + 4) / 6; break;
      }
    }
    
    // Apply adjustments
    h = (h + hueAdjust) % 1;
    s = Math.max(0, Math.min(1, s * satAdjust));
    
    // Convert back to RGB
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    if (s === 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    
    data[i] = Math.round(r * 255);
    data[i + 1] = Math.round(g * 255);
    data[i + 2] = Math.round(b * 255);
  }
}

// Quantize color to nearest level
function quantizeColor(value: number, levels: number): number {
  const step = 255 / (levels - 1);
  return Math.round(Math.round(value / step) * step);
}

// Floyd-Steinberg dithering
export function floydSteinberg(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  // Apply brightness and contrast
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  
  // Apply color adjustments if in color mode
  if (settings.colorMode === 'color') {
    applyColorAdjustments(data, settings.hue, settings.saturation);
  }
  
  // Convert to grayscale if needed
  if (settings.colorMode === 'grayscale') {
    toGrayscale(data);
  }
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const oldPixel = data[i];
      const newPixel = quantizeColor(oldPixel, settings.colorDepth);
      const error = oldPixel - newPixel;
      
      data[i] = data[i + 1] = data[i + 2] = newPixel;
      
      // Distribute error to neighboring pixels
      const distributeError = (dx: number, dy: number, factor: number) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const j = (ny * width + nx) * 4;
          data[j] += error * factor;
          data[j + 1] += error * factor;
          data[j + 2] += error * factor;
        }
      };
      
      distributeError(1, 0, 7 / 16);
      distributeError(-1, 1, 3 / 16);
      distributeError(0, 1, 5 / 16);
      distributeError(1, 1, 1 / 16);
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Atkinson dithering
export function atkinson(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  toGrayscale(data);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const oldPixel = data[i];
      const newPixel = quantizeColor(oldPixel, settings.colorDepth);
      const error = oldPixel - newPixel;
      
      data[i] = data[i + 1] = data[i + 2] = newPixel;
      
      const distributeError = (dx: number, dy: number) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const j = (ny * width + nx) * 4;
          data[j] += error / 8;
          data[j + 1] += error / 8;
          data[j + 2] += error / 8;
        }
      };
      
      distributeError(1, 0);
      distributeError(2, 0);
      distributeError(-1, 1);
      distributeError(0, 1);
      distributeError(1, 1);
      distributeError(0, 2);
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Bayer 8x8 ordered dithering
export function bayerDithering(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const bayerMatrix = [
    [0, 32, 8, 40, 2, 34, 10, 42],
    [48, 16, 56, 24, 50, 18, 58, 26],
    [12, 44, 4, 36, 14, 46, 6, 38],
    [60, 28, 52, 20, 62, 30, 54, 22],
    [3, 35, 11, 43, 1, 33, 9, 41],
    [51, 19, 59, 27, 49, 17, 57, 25],
    [15, 47, 7, 39, 13, 45, 5, 37],
    [63, 31, 55, 23, 61, 29, 53, 21],
  ];
  
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  toGrayscale(data);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const oldPixel = data[i];
      
      const threshold = (bayerMatrix[y % 8][x % 8] / 64) * 255;
      const adjustment = (threshold - 127.5) / (settings.colorDepth - 1);
      
      const newPixel = quantizeColor(oldPixel + adjustment, settings.colorDepth);
      data[i] = data[i + 1] = data[i + 2] = newPixel;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Random noise dithering
export function randomDithering(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  toGrayscale(data);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const oldPixel = data[i];
      
      // Add random noise
      const noise = (Math.random() - 0.5) * 50;
      const newPixel = quantizeColor(oldPixel + noise, settings.colorDepth);
      
      data[i] = data[i + 1] = data[i + 2] = newPixel;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Jarvis-Judice-Ninke dithering (more distributed error diffusion)
export function jarvisJudiceNinke(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  toGrayscale(data);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const oldPixel = data[i];
      const newPixel = quantizeColor(oldPixel, settings.colorDepth);
      const error = oldPixel - newPixel;
      
      data[i] = data[i + 1] = data[i + 2] = newPixel;
      
      const distributeError = (dx: number, dy: number, factor: number) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const j = (ny * width + nx) * 4;
          data[j] += error * factor;
          data[j + 1] += error * factor;
          data[j + 2] += error * factor;
        }
      };
      
      // JJN kernel distributes error over 12 pixels
      distributeError(1, 0, 7 / 48);
      distributeError(2, 0, 5 / 48);
      distributeError(-2, 1, 3 / 48);
      distributeError(-1, 1, 5 / 48);
      distributeError(0, 1, 7 / 48);
      distributeError(1, 1, 5 / 48);
      distributeError(2, 1, 3 / 48);
      distributeError(-2, 2, 1 / 48);
      distributeError(-1, 2, 3 / 48);
      distributeError(0, 2, 5 / 48);
      distributeError(1, 2, 3 / 48);
      distributeError(2, 2, 1 / 48);
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Stucki dithering (another error diffusion variant)
export function stucki(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  toGrayscale(data);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const oldPixel = data[i];
      const newPixel = quantizeColor(oldPixel, settings.colorDepth);
      const error = oldPixel - newPixel;
      
      data[i] = data[i + 1] = data[i + 2] = newPixel;
      
      const distributeError = (dx: number, dy: number, factor: number) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const j = (ny * width + nx) * 4;
          data[j] += error * factor;
          data[j + 1] += error * factor;
          data[j + 2] += error * factor;
        }
      };
      
      // Stucki kernel
      distributeError(1, 0, 8 / 42);
      distributeError(2, 0, 4 / 42);
      distributeError(-2, 1, 2 / 42);
      distributeError(-1, 1, 4 / 42);
      distributeError(0, 1, 8 / 42);
      distributeError(1, 1, 4 / 42);
      distributeError(2, 1, 2 / 42);
      distributeError(-2, 2, 1 / 42);
      distributeError(-1, 2, 2 / 42);
      distributeError(0, 2, 4 / 42);
      distributeError(1, 2, 2 / 42);
      distributeError(2, 2, 1 / 42);
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Burkes dithering
export function burkes(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  toGrayscale(data);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const oldPixel = data[i];
      const newPixel = quantizeColor(oldPixel, settings.colorDepth);
      const error = oldPixel - newPixel;
      
      data[i] = data[i + 1] = data[i + 2] = newPixel;
      
      const distributeError = (dx: number, dy: number, factor: number) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const j = (ny * width + nx) * 4;
          data[j] += error * factor;
          data[j + 1] += error * factor;
          data[j + 2] += error * factor;
        }
      };
      
      // Burkes kernel
      distributeError(1, 0, 8 / 32);
      distributeError(2, 0, 4 / 32);
      distributeError(-2, 1, 2 / 32);
      distributeError(-1, 1, 4 / 32);
      distributeError(0, 1, 8 / 32);
      distributeError(1, 1, 4 / 32);
      distributeError(2, 1, 2 / 32);
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Sierra dithering
export function sierra(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  toGrayscale(data);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const oldPixel = data[i];
      const newPixel = quantizeColor(oldPixel, settings.colorDepth);
      const error = oldPixel - newPixel;
      
      data[i] = data[i + 1] = data[i + 2] = newPixel;
      
      const distributeError = (dx: number, dy: number, factor: number) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const j = (ny * width + nx) * 4;
          data[j] += error * factor;
          data[j + 1] += error * factor;
          data[j + 2] += error * factor;
        }
      };
      
      // Sierra kernel
      distributeError(1, 0, 5 / 32);
      distributeError(2, 0, 3 / 32);
      distributeError(-2, 1, 2 / 32);
      distributeError(-1, 1, 4 / 32);
      distributeError(0, 1, 5 / 32);
      distributeError(1, 1, 4 / 32);
      distributeError(2, 1, 2 / 32);
      distributeError(-1, 2, 2 / 32);
      distributeError(0, 2, 3 / 32);
      distributeError(1, 2, 2 / 32);
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Two-Row Sierra (Sierra Lite)
export function sierraLite(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  toGrayscale(data);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const oldPixel = data[i];
      const newPixel = quantizeColor(oldPixel, settings.colorDepth);
      const error = oldPixel - newPixel;
      
      data[i] = data[i + 1] = data[i + 2] = newPixel;
      
      const distributeError = (dx: number, dy: number, factor: number) => {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
          const j = (ny * width + nx) * 4;
          data[j] += error * factor;
          data[j + 1] += error * factor;
          data[j + 2] += error * factor;
        }
      };
      
      // Sierra Lite kernel (faster, 2 rows)
      distributeError(1, 0, 2 / 4);
      distributeError(-1, 1, 1 / 4);
      distributeError(0, 1, 1 / 4);
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Halftone / Dot pattern dithering
export function halftone(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  toGrayscale(data);
  
  const dotSize = 4; // Size of halftone dots
  
  for (let y = 0; y < height; y += dotSize) {
    for (let x = 0; x < width; x += dotSize) {
      // Calculate average brightness of block
      let sum = 0;
      let count = 0;
      
      for (let dy = 0; dy < dotSize && y + dy < height; dy++) {
        for (let dx = 0; dx < dotSize && x + dx < width; dx++) {
          const i = ((y + dy) * width + (x + dx)) * 4;
          sum += data[i];
          count++;
        }
      }
      
      const avg = sum / count;
      const radius = ((255 - avg) / 255) * (dotSize / 2);
      
      // Draw dot in block
      for (let dy = 0; dy < dotSize && y + dy < height; dy++) {
        for (let dx = 0; dx < dotSize && x + dx < width; dx++) {
          const i = ((y + dy) * width + (x + dx)) * 4;
          const centerX = dotSize / 2;
          const centerY = dotSize / 2;
          const dist = Math.sqrt((dx - centerX) ** 2 + (dy - centerY) ** 2);
          
          const value = dist < radius ? 0 : 255;
          data[i] = data[i + 1] = data[i + 2] = value;
        }
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Pattern dithering (crosshatch style)
export function patternDither(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  applyBrightnessContrast(data, settings.brightness, settings.contrast);
  toGrayscale(data);
  
  // 4x4 patterns for different brightness levels
  const patterns = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Black
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // White
  ];
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const oldPixel = data[i];
      
      // Map brightness to pattern index
      const patternIndex = Math.floor((oldPixel / 255) * (patterns.length - 1));
      const pattern = patterns[patternIndex];
      
      const patternX = x % 4;
      const patternY = y % 4;
      const patternValue = pattern[patternY * 4 + patternX];
      
      const newPixel = patternValue * 255;
      data[i] = data[i + 1] = data[i + 2] = newPixel;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Main dithering function
export function applyDithering(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  settings: DitherSettings
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  // Set canvas size to match image
  canvas.width = image.width;
  canvas.height = image.height;
  
  // Draw original image
  ctx.drawImage(image, 0, 0);
  
  // Check if it's a WebGL shader
  const webglShaders = [
    'raymarching-spheres', 'mandelbrot', 'voronoi', 'plasma', 'kaleidoscope',
    'rgb-split', 'glitch', 'pixel-dither', 'wave-distortion', 'tunnel',
    'ripple', 'oil-painting', 'mosaic', 'mosaic-tiles', 'pixelate',
    'chromatic', 'heatmap', 'vignette', 'swirl', 'mirror'
  ];
  
  if (webglShaders.includes(settings.filter)) {
    // Will be handled by DitherCanvas component with WebGL
    return;
  }
  
  // Apply Canvas 2D filter if selected (and not 'none')
  if (settings.filter !== 'none') {
    const { applyFilter } = require('./filters');
    applyFilter(ctx, settings);
  } else {
    // Apply dithering algorithm
    switch (settings.algorithm) {
      case 'floyd-steinberg':
        floydSteinberg(ctx, settings);
        break;
      case 'atkinson':
        atkinson(ctx, settings);
        break;
      case 'bayer':
        bayerDithering(ctx, settings);
        break;
      case 'random':
        randomDithering(ctx, settings);
        break;
      case 'jarvis-judice-ninke':
        jarvisJudiceNinke(ctx, settings);
        break;
      case 'stucki':
        stucki(ctx, settings);
        break;
      case 'burkes':
        burkes(ctx, settings);
        break;
      case 'sierra':
        sierra(ctx, settings);
        break;
      case 'sierra-lite':
        sierraLite(ctx, settings);
        break;
      case 'halftone':
        halftone(ctx, settings);
        break;
      case 'pattern':
        patternDither(ctx, settings);
        break;
    }
  }
}
