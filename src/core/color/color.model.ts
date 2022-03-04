import {
  colorCategories,
  colorRoles,
  colorSchemes,
  colorStyles
} from './color.types';

// hsl(hue, saturation, lightness)

export interface IColor {

  /* Meta */
  scheme?: colorSchemes;
  style?: colorStyles;
  role?: colorRoles;
  category?: colorCategories;

  /* Gradients */
  GradientPosition?: IGradientPosition;

  /* Ranges */
  saturationRange?: IRange;
  brightnessRangeMap?: IRange;

  /* HSL */
  hue: number;
  saturation?: number;
  lightness?: number;

  /* Transparency */
  alpha: number;
}

export interface IGradientPosition {
  value: string;
}

export interface IRange {
  low: number;
  high: number;
  default?: number;
}
