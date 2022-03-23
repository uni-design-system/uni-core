// https://designerup.co/blog/ui-design-choosing-color-palettes/
// https://designerup.co/blog/practical-guide-to-perfect-ui-color-palettes/

import { Range } from './color.model';

export type colorStyles = 'solid' | 'transparent' | 'gradient';

export type ColorOutput =
  | 'HEX'
  | 'RGB'
  | 'RGBA'
  | 'HSL'
  | 'HSLA'
  ;

export type colorSchemes =
  | 'monochromatic'
  | 'analogous'
  | 'complimentary'
  | 'splitComplimentary'
  | 'triadic'
  ;

export type colorCategories =
  | 'jewel'
  | 'pastel'
  | 'earth'
  | 'neutral'
  | 'florescent'
  | 'shades'
  ;

export const saturationRanges: Record<colorCategories, Range> = {
  jewel: { low: 73, high: 83 },
  pastel: { low: 14, high: 21 },
  earth: { low: 36, high: 41 },
  neutral: { low: 1, high: 10 },
  florescent: { low: 63, high: 100 },
  shades: { low: 0, high: 0 },
};

export const lightnessRanges: Record<colorCategories, Range> = {
  jewel: { low: 56, high: 76 },
  pastel: { low: 89, high: 96 },
  earth: { low: 36, high: 77 },
  neutral: { low: 70, high: 99 },
  florescent: { low: 82, high: 100 },
  shades: { low: 0, high: 100 }
};


// Red - used to indicate error, danger, wrong.
// Green - used to indicate success saved or correct.
// Yellow - used for temporary alert, caution, warnings.
// Blue  - used for information.

export type utilColorRoles = 'warn'
  | 'alert'
  | 'success'
  | 'info'
;

export type colorRoles = 'primary'
  | 'secondary'
  | 'tertiary'
  | 'inverse'
  | 'ghost'
  ;

export const roleHues: Record<colorRoles, Range> = {
  primary: { low: 73, high: 83, default: 0 },
  secondary: { low: 14, high: 21, default: 0 },
  tertiary: { low: 36, high: 41, default: 0 },
  inverse: { low: 63, high: 100, default: 0 },
  ghost: { low: 0, high: 0, default: 0 },
}

export const utilHues: Record<utilColorRoles, Range> = {
  warn: { low: 320, high: 20, default: 0 }, // red
  alert: { low: 40, high: 70, default: 60 }, // yellow
  success: { low: 90, high: 150, default: 120 }, // green
  info: { low: 200, high: 260, default: 240 }, // blue
}

export type ColorModes =
  | 'base'
  | 'hover'
  | 'active'
  | 'disabled'
  ;

export type ColorToken =
  | ElementColorToken
  | ContainerColorToken
  | ContentColorToken
  | UtilityColorToken
  ;

export type ElementColorToken =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  ;

export type ContainerColorToken =
  | 'primary-container'
  | 'secondary-container'
  | 'tertiary-container'
  | 'error-container'
  | 'background'
  | 'surface'
  | 'surface-variant'
  | 'inverse-surface'
  ;

export type ContentColorToken =
  | 'on-primary'
  | 'on-primary-container'
  | 'on-secondary'
  | 'on-secondary-container'
  | 'on-tertiary'
  | 'on-tertiary-container'
  | 'on-error'
  | 'on-error-container'
  | 'on-background'
  | 'on-surface'
  | 'on-surface-variant'
  | 'inverse-on-surface'
  | 'inverse-on-surface-primary'
  ;

export type UtilityColorToken =
  | 'outline'
  | 'shadow'
  | 'surface-tint'
  | 'transparent'
  ;
