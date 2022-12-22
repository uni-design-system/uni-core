import { ColorCategory, ColorRole, ColorScheme, ColorStyles } from './color.types';

export interface UniColor {
  scheme: ColorScheme;
  role: ColorRole;
  category: ColorCategory;
  alpha?: number;
}

export interface Color {
  /* Meta */
  scheme?: ColorScheme;
  role?: ColorRole;
  category?: ColorCategory;

  style?: ColorStyles;

  /* Gradients */
  GradientPosition?: GradientPosition;

  /* Ranges */
  saturationRange?: Range;
  brightnessRangeMap?: Range;

  /* HSL */
  hue: number | undefined;
  saturation?: number;
  lightness?: number;

  /* Transparency */
  alpha: number;
}

export interface GradientPosition {
  value: string;
}

export interface Range {
  low: number;
  high: number;
  default?: number;
}

export interface HSL {
  hue?: number;
  saturation?: number;
  lightness?: number;
  alpha?: number;
}

export interface HSLA extends HSL {
  alpha?: number;
}

export interface RGB {
  red: number;
  green: number;
  blue: number;
}

export interface RGBA extends RGB {
  alpha: number;
}
