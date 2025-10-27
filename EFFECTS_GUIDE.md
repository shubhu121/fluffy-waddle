# 🎨 DitherLab - Complete Effect List

## Total: 39 Effects (11 Dithering + 28 Shaders)

---

## 🔲 DITHERING ALGORITHMS (11)

### Error Diffusion (7)
1. **Floyd–Steinberg** - Classic 4-neighbor error distribution
2. **Atkinson** - 6-neighbor, lighter highlights (Apple Mac)
3. **Jarvis-Judice-Ninke (JJN)** - 12-neighbor smooth gradients
4. **Stucki** - 12-neighbor optimized weights
5. **Burkes** - 7-neighbor balanced distribution
6. **Sierra** - 10-neighbor three-row diffusion
7. **Sierra Lite** - 4-neighbor fast two-row

### Ordered Dithering (2)
8. **Bayer Matrix** - 8×8 threshold matrix (retro)
9. **Pattern/Crosshatch** - 4×4 artistic textures

### Special Effects (2)
10. **Halftone Dots** - Newspaper/comic style
11. **Random Noise** - Controlled chaos glitch

---

## 🌈 SHADER EFFECTS (28)

### Canvas 2D Filters (8)
1. **Mesh Gradient** - Multi-point animated gradient
2. **Static Mesh** - 4-point color blend
3. **Radial Gradient** - Center-to-edge
4. **Grain Gradient** - Film grain overlay
5. **Liquid Metal** - Edge-detected chrome
6. **Dot Orbit** - Animated particle system
7. **Dot Grid** - Variable halftone grid
8. **Warp** - Animated sine distortion

### WebGL/GLSL Shaders (20)

#### Raytracing (1)
9. **🔮 Raymarched Spheres** - Real-time sphere field with dynamic lighting (60fps)

#### Fractals & Patterns (3)
10. **🌀 Mandelbrot Set** - Animated fractal zoom with color palette (60fps)
11. **🔶 Voronoi Cells** - Animated cellular noise (60fps)
12. **⚡ Plasma Waves** - Multi-layer sine wave plasma (60fps)

#### Distortion Effects (6)
13. **🌊 Tunnel Effect** - Infinite texture-mapped tunnel (60fps)
14. **💧 Ripple Effect** - Concentric wave distortion (60fps)
15. **🌊 Wave Distortion** - Dual-axis displacement (60fps)
16. **🌀 Swirl Effect** - Radial twist distortion (60fps)
17. **🔮 Kaleidoscope** - 8-segment mirror symmetry
18. **🪞 Mirror Effect** - Quad-mirror symmetry

#### Artistic Filters (4)
19. **🎨 Voronoi Mosaic** - Stained glass with cell borders
20. **🧩 Mosaic Tiles** - Geometric tile pattern
21. **🖼️ Oil Painting** - Kuwahara-style smoothing
22. **🎮 Pixel Dither** - Animated Bayer matrix pixelation (60fps)

#### Post-Processing Effects (6)
23. **📺 RGB Split** - Dynamic chromatic aberration (60fps)
24. **📺 Glitch** - Scanline corruption with RGB shift (60fps)
25. **🌈 Chromatic Aberration** - Color channel separation
26. **🔥 Heatmap** - Temperature-based color mapping
27. **🎞️ Vignette** - Smooth edge darkening
28. **🔲 Pixelate** - Retro pixel downscaling

---

## ⚡ Performance Breakdown

### Rendering Methods
- **Dithering (11):** Canvas 2D - Instant processing
- **Canvas 2D (8):** 2D Context - 30fps animations
- **WebGL (20):** GPU-accelerated - 60fps animations

### Animation Status
**Animated (60fps):**
- Raymarched Spheres, Mandelbrot, Voronoi, Plasma
- Tunnel, Ripple, Wave Distortion, Swirl
- RGB Split, Glitch, Pixel Dither

**Static:**
- All dithering algorithms
- Kaleidoscope, Mirror, Mosaic variants
- Oil Painting, Chromatic, Heatmap, Vignette, Pixelate

---

## 🎯 Effect Selection Guide

### For Print Design
- Floyd-Steinberg, Atkinson, Halftone Dots
- Bayer Matrix, Pattern

### For Digital Art
- Mandelbrot, Voronoi, Plasma
- Kaleidoscope, Mosaic, Oil Painting

### For Retro/Game Art
- Bayer Matrix, Pixel Dither
- Pixelate, Halftone

### For Glitch Art
- Random Noise, Glitch, RGB Split
- Chromatic Aberration

### For Web Graphics
- All WebGL shaders
- Mesh Gradient, Heatmap

---

## 🧪 Technical Implementation

### Dithering Algorithms
- Language: TypeScript
- API: Canvas 2D getImageData/putImageData
- Performance: <100ms typical

### Canvas 2D Filters
- Language: TypeScript
- API: Canvas 2D pixel manipulation
- Animation: setTimeout at 30fps

### WebGL Shaders
- Language: GLSL (OpenGL Shading Language)
- API: WebGL 1.0
- Animation: requestAnimationFrame at 60fps
- Precision: mediump float (optimal performance)

---

## 🎨 Shader Categories Explained

**Raytracing:**
- Uses distance fields and ray marching
- Calculates 3D lighting in real-time
- Computationally intensive but beautiful

**Fractals:**
- Mathematical iteration algorithms
- Infinite detail at any zoom level
- Color palettes via trigonometric functions

**Distortion:**
- UV coordinate manipulation
- Lens effects, waves, swirls
- Real-time displacement mapping

**Artistic:**
- Texture synthesis and filtering
- Voronoi diagrams, mosaics
- Stylization filters

**Post-Processing:**
- Color channel manipulation
- Chromatic effects, glitches
- Enhancement filters

---

**All effects work at 60fps on modern browsers with WebGL support!**
