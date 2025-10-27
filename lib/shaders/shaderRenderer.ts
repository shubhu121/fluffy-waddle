import { ShaderProgram, vertexShader } from './ShaderProgram';
import { shaderList } from './glslShaders';
import { DitherSettings } from '@/store/useDitherStore';

export function applyWebGLShader(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  shaderName: keyof typeof shaderList,
  settings: DitherSettings
): ShaderProgram | null {
  try {
    // Set canvas size to match image
    canvas.width = image.width;
    canvas.height = image.height;

    // Create shader program
    const shader = new ShaderProgram(canvas);
    const fragmentShader = shaderList[shaderName];

    if (!shader.createProgram(vertexShader, fragmentShader)) {
      console.error('Failed to create shader program');
      return null;
    }

    shader.setTexture(image);
    shader.setupGeometry();

    // Set uniforms
    const uniforms = {
      u_resolution: [canvas.width, canvas.height],
      u_time: 0,
      u_brightness: settings.brightness / 100,
      u_contrast: settings.contrast / 100,
    };

    shader.render(uniforms);
    return shader;
  } catch (error) {
    console.error('WebGL shader error:', error);
    return null;
  }
}

export function animateWebGLShader(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  shaderName: keyof typeof shaderList,
  settings: DitherSettings
): ShaderProgram | null {
  try {
    // Set canvas size to match image
    canvas.width = image.width;
    canvas.height = image.height;

    // Create shader program
    const shader = new ShaderProgram(canvas);
    const fragmentShader = shaderList[shaderName];

    if (!shader.createProgram(vertexShader, fragmentShader)) {
      console.error('Failed to create shader program');
      return null;
    }

    shader.setTexture(image);
    shader.setupGeometry();

    // Animate with smooth 60fps
    shader.animate(() => ({
      u_resolution: [canvas.width, canvas.height],
      u_brightness: settings.brightness / 100,
      u_contrast: settings.contrast / 100,
    }));

    return shader;
  } catch (error) {
    console.error('WebGL animation error:', error);
    return null;
  }
}

// List of shaders that need animation
export const animatedShaders = new Set([
  'raymarching-spheres',
  'mandelbrot',
  'voronoi',
  'plasma',
  'rgb-split',
  'glitch',
  'pixel-dither',
  'wave-distortion',
  'tunnel',
  'ripple',
  'swirl',
]);

export function isAnimatedShader(shaderName: string): boolean {
  return animatedShaders.has(shaderName);
}
