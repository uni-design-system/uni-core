import {
  colorCategories,
  colorRoles,
  colorSchemes,
  colorStyles
} from './color.types';

// hsl(hue, saturation, lightness)

export interface Color {

  /* Meta */
  scheme?: colorSchemes;
  style?: colorStyles;
  role?: colorRoles;
  category?: colorCategories;

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
