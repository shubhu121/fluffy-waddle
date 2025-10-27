// Advanced GLSL Fragment Shaders

// Plasma Effect - Works reliably
export const plasmaEffect = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  float v = 0.0;
  v += sin(p.x * 10.0 + u_time);
  v += sin(p.y * 10.0 + u_time);
  v += sin((p.x + p.y) * 10.0 + u_time);
  v += sin(length(p) * 10.0 + u_time);
  
  vec3 col = vec3(
    0.5 + 0.5 * sin(v + u_time),
    0.5 + 0.5 * sin(v + u_time + 2.094),
    0.5 + 0.5 * sin(v + u_time + 4.188)
  );
  
  vec3 texCol = texture2D(u_texture, uv).rgb;
  float brightness = dot(texCol, vec3(0.299, 0.587, 0.114));
  
  col *= brightness * 1.5;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Ripple Effect
export const rippleEffect = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 center = vec2(0.5);
  
  float dist = length(uv - center);
  float ripple = sin(dist * 30.0 - u_time * 3.0) * 0.02 / (dist + 0.5);
  
  vec2 dir = normalize(uv - center);
  uv += dir * ripple;
  
  vec3 col = texture2D(u_texture, uv).rgb;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Wave Distortion
export const waveDistortion = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  
  float wave1 = sin(uv.y * 10.0 + u_time * 2.0) * 0.05;
  float wave2 = cos(uv.x * 8.0 + u_time * 1.5) * 0.03;
  
  uv.x += wave1;
  uv.y += wave2;
  
  vec3 col = texture2D(u_texture, uv).rgb;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Kaleidoscope
export const kaleidoscope = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

#define PI 3.14159265359

void main() {
  vec2 uv = v_texCoord;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  float a = atan(p.y, p.x);
  float r = length(p);
  
  float segments = 8.0;
  a = mod(a, PI * 2.0 / segments);
  a = abs(a - PI / segments);
  
  p = vec2(cos(a), sin(a)) * r;
  
  vec2 newUv = p * 0.5 + 0.5;
  newUv = fract(newUv);
  
  vec3 col = texture2D(u_texture, newUv).rgb;
  col *= 1.0 - r * 0.3;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// RGB Split
export const rgbSplitShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 center = vec2(0.5);
  vec2 dir = uv - center;
  float dist = length(dir);
  
  float offset = sin(u_time * 2.0) * 0.015 * dist;
  
  float r = texture2D(u_texture, uv - dir * offset).r;
  float g = texture2D(u_texture, uv).g;
  float b = texture2D(u_texture, uv + dir * offset).b;
  
  gl_FragColor = vec4(r, g, b, 1.0);
}
`;

// Tunnel Effect
export const tunnelEffect = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

#define PI 3.14159265359

void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  float a = atan(p.y, p.x) / PI;
  float r = length(p);
  
  vec2 tuv = vec2(
    a * 0.5 + 0.5,
    0.5 / r + u_time * 0.2
  );
  
  tuv = fract(tuv);
  
  vec3 col = texture2D(u_texture, tuv).rgb;
  col *= (1.0 - r * 0.4);
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Voronoi Pattern
export const voronoiPattern = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

#define PI 3.14159265359

vec2 random2(vec2 st) {
  st = vec2(dot(st, vec2(127.1, 311.7)), dot(st, vec2(269.5, 183.3)));
  return fract(sin(st) * 43758.5453123);
}

void main() {
  vec2 uv = v_texCoord;
  vec2 st = uv * 12.0;
  
  vec2 i_st = floor(st);
  vec2 f_st = fract(st);
  
  float minDist = 1.0;
  vec2 minPoint;
  
  for(int y = -1; y <= 1; y++) {
    for(int x = -1; x <= 1; x++) {
      vec2 neighbor = vec2(float(x), float(y));
      vec2 point = random2(i_st + neighbor);
      point = 0.5 + 0.5 * sin(u_time + 6.2831 * point);
      
      float dist = length(neighbor + point - f_st);
      if(dist < minDist) {
        minDist = dist;
        minPoint = point;
      }
    }
  }
  
  vec3 texCol = texture2D(u_texture, uv).rgb;
  float brightness = dot(texCol, vec3(0.299, 0.587, 0.114));
  
  vec3 col = mix(
    vec3(0.3, 0.5, 0.9),
    vec3(0.9, 0.5, 0.3),
    minPoint.x
  );
  
  col *= 1.0 - 0.4 * minDist;
  col = mix(col, texCol, 0.4);
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Mandelbrot Fractal
export const mandelbrotFractal = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

vec3 palette(float t) {
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.0, 0.33, 0.67);
  return a + b * cos(6.28318 * (c * t + d));
}

void main() {
  vec2 uv = v_texCoord;
  vec2 c = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  float zoom = 0.5 + sin(u_time * 0.3) * 0.3;
  c = c * zoom + vec2(-0.5, 0.0);
  
  vec2 z = vec2(0.0);
  float iter = 0.0;
  
  for(int i = 0; i < 100; i++) {
    z = vec2(z.x * z.x - z.y * z.y, 2.0 * z.x * z.y) + c;
    if(length(z) > 2.0) break;
    iter += 1.0;
  }
  
  float col = iter / 100.0;
  vec3 fractalCol = palette(col + u_time * 0.1);
  
  vec3 texCol = texture2D(u_texture, uv).rgb;
  float brightness = dot(texCol, vec3(0.299, 0.587, 0.114));
  
  vec3 finalCol = mix(texCol * 0.5, fractalCol, brightness * 0.8);
  
  gl_FragColor = vec4(finalCol, 1.0);
}
`;

// Raymarching Spheres
export const raymarchingSpheres = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

#define MAX_STEPS 64
#define MAX_DIST 10.0
#define SURF_DIST 0.01

float sdSphere(vec3 p, float r) {
  return length(p) - r;
}

float map(vec3 p) {
  float d = MAX_DIST;
  
  for(int i = 0; i < 4; i++) {
    float fi = float(i);
    vec3 offset = vec3(
      sin(u_time + fi * 2.0) * 1.5,
      cos(u_time * 0.5 + fi) * 1.5,
      sin(u_time * 0.3 + fi * 1.5) * 1.5 - 3.0
    );
    d = min(d, sdSphere(p - offset, 0.4 + sin(u_time + fi) * 0.15));
  }
  
  return d;
}

vec3 getNormal(vec3 p) {
  float d = map(p);
  vec2 e = vec2(0.01, 0.0);
  vec3 n = d - vec3(
    map(p - e.xyy),
    map(p - e.yxy),
    map(p - e.yyx)
  );
  return normalize(n);
}

void main() {
  vec2 uv = v_texCoord;
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  
  vec3 ro = vec3(0.0, 0.0, 3.0);
  vec3 rd = normalize(vec3(p, -1.0));
  
  vec3 texCol = texture2D(u_texture, uv).rgb;
  vec3 col = texCol * 0.3;
  
  float t = 0.0;
  
  for(int i = 0; i < MAX_STEPS; i++) {
    vec3 pos = ro + rd * t;
    float d = map(pos);
    
    if(d < SURF_DIST) {
      vec3 normal = getNormal(pos);
      vec3 lightDir = normalize(vec3(1.0, 1.0, 2.0));
      float diff = max(dot(normal, lightDir), 0.0);
      
      vec3 sphereCol = vec3(0.3, 0.6, 1.0);
      col = mix(col, sphereCol * (diff + 0.2), 0.8);
      break;
    }
    
    t += d;
    if(t > MAX_DIST) break;
  }
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Mosaic/Stained Glass
export const mosaicShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

vec2 random2(vec2 st) {
  st = vec2(dot(st, vec2(127.1, 311.7)), dot(st, vec2(269.5, 183.3)));
  return fract(sin(st) * 43758.5453123);
}

void main() {
  vec2 uv = v_texCoord;
  vec2 st = uv * 20.0;
  
  vec2 i_st = floor(st);
  vec2 f_st = fract(st);
  
  vec2 point = random2(i_st);
  vec2 cellUv = (i_st + point) / 20.0;
  
  vec3 col = texture2D(u_texture, cellUv).rgb;
  
  float dist = length(f_st - point);
  float edge = smoothstep(0.4, 0.45, dist);
  col = mix(col, vec3(0.1), edge * 0.6);
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Oil Painting Effect
export const oilPaintingShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 texelSize = 1.0 / u_resolution;
  
  vec3 col = vec3(0.0);
  float totalWeight = 0.0;
  
  for(int x = -2; x <= 2; x++) {
    for(int y = -2; y <= 2; y++) {
      vec2 offset = vec2(float(x), float(y)) * texelSize * 2.0;
      vec3 sample = texture2D(u_texture, uv + offset).rgb;
      
      float weight = 1.0 - length(offset) / (4.0 * length(texelSize));
      weight = max(weight, 0.1);
      
      col += sample * weight;
      totalWeight += weight;
    }
  }
  
  col /= totalWeight;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Pixel Dither with Bayer
export const pixelDitherShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

float bayer2(vec2 a) {
  a = floor(a);
  return fract(dot(a, vec2(0.5, a.y * 0.75)));
}

#define bayer4(a) (bayer2(0.5 * (a)) * 0.25 + bayer2(a))
#define bayer8(a) (bayer4(0.5 * (a)) * 0.25 + bayer2(a))

void main() {
  float pixelSize = 6.0 + sin(u_time * 0.5) * 3.0;
  vec2 pixelUv = floor(v_texCoord * u_resolution / pixelSize) * pixelSize / u_resolution;
  
  vec3 col = texture2D(u_texture, pixelUv).rgb;
  float gray = dot(col, vec3(0.299, 0.587, 0.114));
  
  float dither = bayer8(gl_FragCoord.xy);
  float threshold = gray + (dither - 0.5) * 0.3;
  
  col = vec3(step(0.5, threshold));
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Glitch Effect
export const glitchShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = v_texCoord;
  
  float glitchStrength = step(0.96, random(vec2(u_time * 2.0, floor(uv.y * 30.0))));
  
  if(glitchStrength > 0.0) {
    float offset = (random(vec2(u_time, floor(uv.y * 30.0))) - 0.5) * 0.15;
    uv.x += offset;
  }
  
  float r = texture2D(u_texture, uv + vec2(0.01, 0.0) * glitchStrength).r;
  float g = texture2D(u_texture, uv).g;
  float b = texture2D(u_texture, uv - vec2(0.01, 0.0) * glitchStrength).b;
  
  vec3 col = vec3(r, g, b);
  
  if(glitchStrength > 0.0) {
    float scanline = sin(uv.y * 500.0) * 0.05;
    col += scanline;
  }
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Mosaic Tiles
export const mosaicTiles = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  float tileSize = 20.0;
  vec2 tileUv = floor(v_texCoord * u_resolution / tileSize) * tileSize / u_resolution;
  tileUv += vec2(tileSize / 2.0) / u_resolution;
  
  vec3 col = texture2D(u_texture, tileUv).rgb;
  
  vec2 localUv = fract(v_texCoord * u_resolution / tileSize);
  vec2 center = vec2(0.5);
  float dist = length(localUv - center);
  
  float border = smoothstep(0.45, 0.5, dist);
  col = mix(col, col * 0.5, border);
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Pixelate Effect
export const pixelateShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  float pixelSize = 8.0;
  vec2 pixelUv = floor(v_texCoord * u_resolution / pixelSize) * pixelSize / u_resolution;
  
  vec3 col = texture2D(u_texture, pixelUv).rgb;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Chromatic Aberration
export const chromaticShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 offset = vec2(0.005, 0.0);
  
  float r = texture2D(u_texture, uv - offset).r;
  float g = texture2D(u_texture, uv).g;
  float b = texture2D(u_texture, uv + offset).b;
  
  gl_FragColor = vec4(r, g, b, 1.0);
}
`;

// Heatmap
export const heatmapShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

vec3 heatmap(float t) {
  vec3 a = vec3(0.0, 0.0, 1.0);
  vec3 b = vec3(0.0, 1.0, 1.0);
  vec3 c = vec3(0.0, 1.0, 0.0);
  vec3 d = vec3(1.0, 1.0, 0.0);
  vec3 e = vec3(1.0, 0.0, 0.0);
  
  if(t < 0.25) return mix(a, b, t * 4.0);
  else if(t < 0.5) return mix(b, c, (t - 0.25) * 4.0);
  else if(t < 0.75) return mix(c, d, (t - 0.5) * 4.0);
  else return mix(d, e, (t - 0.75) * 4.0);
}

void main() {
  vec2 uv = v_texCoord;
  vec3 texCol = texture2D(u_texture, uv).rgb;
  float gray = dot(texCol, vec3(0.299, 0.587, 0.114));
  
  vec3 col = heatmap(gray);
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Vignette
export const vignetteShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec3 col = texture2D(u_texture, uv).rgb;
  
  vec2 center = vec2(0.5);
  float dist = length(uv - center);
  float vignette = 1.0 - smoothstep(0.3, 0.8, dist);
  
  col *= vignette;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Swirl Effect
export const swirlShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  vec2 center = vec2(0.5);
  vec2 tc = uv - center;
  
  float dist = length(tc);
  float angle = atan(tc.y, tc.x);
  
  angle += (1.0 - dist) * 3.0 * sin(u_time);
  
  vec2 newUv = center + dist * vec2(cos(angle), sin(angle));
  
  vec3 col = texture2D(u_texture, newUv).rgb;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

// Mirror Effect
export const mirrorShader = `
precision mediump float;
uniform vec2 u_resolution;
uniform float u_time;
uniform sampler2D u_texture;
varying vec2 v_texCoord;

void main() {
  vec2 uv = v_texCoord;
  
  uv.x = abs(uv.x - 0.5) + 0.5;
  uv.y = abs(uv.y - 0.5) + 0.5;
  
  uv = fract(uv);
  
  vec3 col = texture2D(u_texture, uv).rgb;
  
  gl_FragColor = vec4(col, 1.0);
}
`;

export const shaderList = {
  'plasma': plasmaEffect,
  'ripple': rippleEffect,
  'wave-distortion': waveDistortion,
  'kaleidoscope': kaleidoscope,
  'rgb-split': rgbSplitShader,
  'tunnel': tunnelEffect,
  'voronoi': voronoiPattern,
  'mandelbrot': mandelbrotFractal,
  'raymarching-spheres': raymarchingSpheres,
  'mosaic': mosaicShader,
  'oil-painting': oilPaintingShader,
  'pixel-dither': pixelDitherShader,
  'glitch': glitchShader,
  'mosaic-tiles': mosaicTiles,
  'pixelate': pixelateShader,
  'chromatic': chromaticShader,
  'heatmap': heatmapShader,
  'vignette': vignetteShader,
  'swirl': swirlShader,
  'mirror': mirrorShader,
};
