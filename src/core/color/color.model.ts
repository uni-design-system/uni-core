import { ColorCategory, ColorRole, ColorScheme, colorStyles } from './color.types';

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

  style?: colorStyles;

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

export interface HSLA {
  hue?: number;
  saturation?: number;
  lightness?: number;
  alpha?: number;
}
