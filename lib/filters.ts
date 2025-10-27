import { DitherSettings } from '@/store/useDitherStore';

// Main filter application function (Canvas 2D only)
export function applyFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  switch (settings.filter) {
    case 'liquid-metal':
      liquidMetalFilter(ctx, settings);
      break;
    case 'mesh-gradient':
      meshGradientFilter(ctx, settings);
      break;
    case 'static-mesh':
      staticMeshGradientFilter(ctx, settings);
      break;
    case 'radial-gradient':
      staticRadialGradientFilter(ctx, settings);
      break;
    case 'grain-gradient':
      grainGradientFilter(ctx, settings);
      break;
    case 'dot-orbit':
      dotOrbitFilter(ctx, settings);
      break;
    case 'dot-grid':
      dotGridFilter(ctx, settings);
      break;
    case 'warp':
      warpFilter(ctx, settings);
      break;
  }
}

// Heatmap gradient effect
export function heatmapFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  
  for (let i = 0; i < data.length; i += 4) {
    const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    const normalized = gray / 255;
    
    // Heatmap color mapping
    let r, g, b;
    if (normalized < 0.25) {
      r = 0;
      g = normalized * 4 * 255;
      b = 255;
    } else if (normalized < 0.5) {
      r = 0;
      g = 255;
      b = (0.5 - normalized) * 4 * 255;
    } else if (normalized < 0.75) {
      r = (normalized - 0.5) * 4 * 255;
      g = 255;
      b = 0;
    } else {
      r = 255;
      g = (1 - normalized) * 4 * 255;
      b = 0;
    }
    
    data[i] = r * (settings.brightness / 100);
    data[i + 1] = g * (settings.brightness / 100);
    data[i + 2] = b * (settings.brightness / 100);
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Liquid Metal effect
export function liquidMetalFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  const tempData = new Uint8ClampedArray(data);
  
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const i = (y * width + x) * 4;
      
      // Edge detection
      const gx = 
        -tempData[((y - 1) * width + (x - 1)) * 4] +
        tempData[((y - 1) * width + (x + 1)) * 4] +
        -2 * tempData[(y * width + (x - 1)) * 4] +
        2 * tempData[(y * width + (x + 1)) * 4] +
        -tempData[((y + 1) * width + (x - 1)) * 4] +
        tempData[((y + 1) * width + (x + 1)) * 4];
      
      const gy =
        -tempData[((y - 1) * width + (x - 1)) * 4] +
        -2 * tempData[((y - 1) * width + x) * 4] +
        -tempData[((y - 1) * width + (x + 1)) * 4] +
        tempData[((y + 1) * width + (x - 1)) * 4] +
        2 * tempData[((y + 1) * width + x) * 4] +
        tempData[((y + 1) * width + (x + 1)) * 4];
      
      const magnitude = Math.sqrt(gx * gx + gy * gy);
      const normalized = Math.min(magnitude / 4, 255);
      
      // Metallic color palette
      const metal = 255 - normalized;
      data[i] = metal * 0.8;     // R - silver/chrome
      data[i + 1] = metal * 0.85; // G
      data[i + 2] = metal;        // B
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Mesh Gradient (animated)
export function meshGradientFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  const time = Date.now() * 0.001;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      
      const nx = x / width;
      const ny = y / height;
      
      // Multi-point gradient with sine waves
      const r = Math.sin(nx * 3 + time) * 127 + 128;
      const g = Math.sin(ny * 3 + time + 2) * 127 + 128;
      const b = Math.sin((nx + ny) * 3 + time + 4) * 127 + 128;
      
      const blend = gray / 255;
      data[i] = r * blend;
      data[i + 1] = g * blend;
      data[i + 2] = b * blend;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Static Mesh Gradient
export function staticMeshGradientFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  // Define gradient control points
  const points = [
    { x: 0.2, y: 0.2, r: 138, g: 180, b: 248 },
    { x: 0.8, y: 0.2, r: 248, g: 113, b: 113 },
    { x: 0.5, y: 0.8, r: 152, g: 251, b: 152 },
    { x: 0.5, y: 0.5, r: 251, g: 211, b: 141 },
  ];
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      
      const nx = x / width;
      const ny = y / height;
      
      let totalWeight = 0;
      let r = 0, g = 0, b = 0;
      
      // Inverse distance weighting
      points.forEach(point => {
        const dx = nx - point.x;
        const dy = ny - point.y;
        const dist = Math.sqrt(dx * dx + dy * dy) + 0.001;
        const weight = 1 / (dist * dist);
        
        totalWeight += weight;
        r += point.r * weight;
        g += point.g * weight;
        b += point.b * weight;
      });
      
      const blend = gray / 255;
      data[i] = (r / totalWeight) * blend;
      data[i + 1] = (g / totalWeight) * blend;
      data[i + 2] = (b / totalWeight) * blend;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Static Radial Gradient
export function staticRadialGradientFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  const centerX = width / 2;
  const centerY = height / 2;
  const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
      
      const dx = x - centerX;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const normalized = dist / maxDist;
      
      // Gradient from center (purple) to edge (blue)
      const r = 138 + (75 - 138) * normalized;
      const g = 180 + (0 - 180) * normalized;
      const b = 248;
      
      const blend = gray / 255;
      data[i] = r * blend;
      data[i + 1] = g * blend;
      data[i + 2] = b * blend;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Grain Gradient
export function grainGradientFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      
      // Horizontal gradient
      const gradientValue = (x / width) * 255;
      
      // Add film grain
      const grain = (Math.random() - 0.5) * 40;
      
      const value = Math.max(0, Math.min(255, gradientValue + grain));
      
      data[i] = value;
      data[i + 1] = value * 0.9;
      data[i + 2] = value * 1.1;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Dot Orbit (animated)
export function dotOrbitFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  const time = Date.now() * 0.001;
  const centerX = width / 2;
  const centerY = height / 2;
  
  // Clear canvas
  data.fill(0);
  
  // Draw orbiting dots
  const numOrbits = 8;
  const dotsPerOrbit = 12;
  
  for (let orbit = 0; orbit < numOrbits; orbit++) {
    const radius = (orbit + 1) * Math.min(width, height) / (numOrbits * 2);
    const speed = 1 + orbit * 0.2;
    
    for (let dot = 0; dot < dotsPerOrbit; dot++) {
      const angle = (dot / dotsPerOrbit) * Math.PI * 2 + time * speed;
      const x = Math.floor(centerX + Math.cos(angle) * radius);
      const y = Math.floor(centerY + Math.sin(angle) * radius);
      
      if (x >= 0 && x < width && y >= 0 && y < height) {
        const dotSize = 3;
        for (let dy = -dotSize; dy <= dotSize; dy++) {
          for (let dx = -dotSize; dx <= dotSize; dx++) {
            const px = x + dx;
            const py = y + dy;
            if (px >= 0 && px < width && py >= 0 && py < height) {
              if (dx * dx + dy * dy <= dotSize * dotSize) {
                const i = (py * width + px) * 4;
                const brightness = 255 - (orbit * 20);
                data[i] = brightness;
                data[i + 1] = brightness * 0.8;
                data[i + 2] = brightness * 1.2;
                data[i + 3] = 255;
              }
            }
          }
        }
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Dot Grid
export function dotGridFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  const spacing = 15;
  const dotRadius = 5;
  
  for (let y = 0; y < height; y += spacing) {
    for (let x = 0; x < width; x += spacing) {
      // Get average brightness in this region
      let avgBrightness = 0;
      let count = 0;
      
      for (let dy = 0; dy < spacing && y + dy < height; dy++) {
        for (let dx = 0; dx < spacing && x + dx < width; dx++) {
          const i = ((y + dy) * width + (x + dx)) * 4;
          avgBrightness += (data[i] + data[i + 1] + data[i + 2]) / 3;
          count++;
        }
      }
      
      avgBrightness /= count;
      const radius = (avgBrightness / 255) * dotRadius;
      
      // Draw dot
      for (let dy = -dotRadius; dy <= dotRadius; dy++) {
        for (let dx = -dotRadius; dx <= dotRadius; dx++) {
          if (dx * dx + dy * dy <= radius * radius) {
            const px = x + spacing / 2 + dx;
            const py = y + spacing / 2 + dy;
            if (px >= 0 && px < width && py >= 0 && py < height) {
              const i = (py * width + px) * 4;
              data[i] = 138;
              data[i + 1] = 180;
              data[i + 2] = 248;
            }
          }
        }
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Warp Effect
export function warpFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  const tempData = new Uint8ClampedArray(data);
  const time = Date.now() * 0.002;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      
      // Apply sinusoidal warp
      const warpX = Math.sin(y * 0.02 + time) * 10;
      const warpY = Math.cos(x * 0.02 + time) * 10;
      
      const srcX = Math.floor(x + warpX);
      const srcY = Math.floor(y + warpY);
      
      if (srcX >= 0 && srcX < width && srcY >= 0 && srcY < height) {
        const srcI = (srcY * width + srcX) * 4;
        data[i] = tempData[srcI];
        data[i + 1] = tempData[srcI + 1];
        data[i + 2] = tempData[srcI + 2];
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Pixelate effect
export function pixelateFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  const pixelSize = Math.max(2, Math.floor(settings.colorDepth / 4));
  
  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      let r = 0, g = 0, b = 0, count = 0;
      
      // Average color in block
      for (let dy = 0; dy < pixelSize && y + dy < height; dy++) {
        for (let dx = 0; dx < pixelSize && x + dx < width; dx++) {
          const i = ((y + dy) * width + (x + dx)) * 4;
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }
      }
      
      r /= count;
      g /= count;
      b /= count;
      
      // Apply to entire block
      for (let dy = 0; dy < pixelSize && y + dy < height; dy++) {
        for (let dx = 0; dx < pixelSize && x + dx < width; dx++) {
          const i = ((y + dy) * width + (x + dx)) * 4;
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
        }
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Glitch Effect
export function glitchFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  const tempData = new Uint8ClampedArray(data);
  
  // Random horizontal shifts
  for (let i = 0; i < 5; i++) {
    const y = Math.floor(Math.random() * height);
    const shift = (Math.random() - 0.5) * 50;
    const sliceHeight = Math.floor(Math.random() * 20) + 5;
    
    for (let dy = 0; dy < sliceHeight && y + dy < height; dy++) {
      for (let x = 0; x < width; x++) {
        const srcX = Math.floor((x + shift + width) % width);
        const srcI = ((y + dy) * width + srcX) * 4;
        const destI = ((y + dy) * width + x) * 4;
        
        // RGB channel shift
        data[destI] = tempData[srcI + 1];     // R from G
        data[destI + 1] = tempData[srcI + 2]; // G from B
        data[destI + 2] = tempData[srcI];     // B from R
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Chromatic Aberration
export function chromaticAberrationFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  const tempData = new Uint8ClampedArray(data);
  const offset = 5;
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      
      // Red channel - shift left
      if (x - offset >= 0) {
        const srcI = (y * width + (x - offset)) * 4;
        data[i] = tempData[srcI];
      }
      
      // Green channel - no shift
      data[i + 1] = tempData[i + 1];
      
      // Blue channel - shift right
      if (x + offset < width) {
        const srcI = (y * width + (x + offset)) * 4;
        data[i + 2] = tempData[srcI + 2];
      }
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Vignette
export function vignetteFilter(
  ctx: CanvasRenderingContext2D,
  settings: DitherSettings
): void {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  
  const centerX = width / 2;
  const centerY = height / 2;
  const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      
      const dx = x - centerX;
      const dy = y - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const vignette = 1 - Math.pow(dist / maxDist, 2);
      
      data[i] *= vignette;
      data[i + 1] *= vignette;
      data[i + 2] *= vignette;
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}
