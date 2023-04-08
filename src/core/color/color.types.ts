// https://designerup.co/blog/ui-design-choosing-color-palettes/
// https://designerup.co/blog/practical-guide-to-perfect-ui-color-palettes/

// Palette Attributes
export type ColorScheme = 'monochromatic' | 'analogous' | 'complimentary' | 'splitComplimentary' | 'triadic';
export type ColorCategory = 'jewel' | 'pastel' | 'earth' | 'neutral' | 'florescent' | 'shades';

// Color Attributes
export type ColorStyles = 'solid' | 'transparent' | 'gradient';

// Color Factory Output Types
export type ColorOutput = 'HEX' | 'RGB' | 'RGBA' | 'HSL' | 'HSLA';

// Variants used in element states, e.g. button
export type ColorModes = 'base' | 'hover' | 'active' | 'disabled';

//
export type ColorRole = 'primary' | 'secondary' | 'tertiary' | 'inverse' | 'ghost';

/*
 *
 * Color Tokens
 *
 * */

export type ColorToken = ElementColorToken | UtilityColorToken | ContainerColorToken | ContentColorToken;

export type ElementColorToken = 'primary' | 'secondary' | 'tertiary' | 'error';

export type UtilityColorToken = 'outline' | 'shadow' | 'surface-tint' | 'transparent';

export type UtilityColorRole =
  | 'warn' // Red - used to indicate error, danger, wrong.
  | 'alert' // Yellow - used for temporary alert, caution, warnings.
  | 'success' // Green - used to indicate success saved or correct.
  | 'info'; // Blue  - used for information.

export type ContainerColorToken =
  | 'primary-container'
  | 'secondary-container'
  | 'tertiary-container'
  | 'error-container'
  | 'background'
  | 'surface'
  | 'surface-variant'
  | 'inverse-surface'
  | 'scrim'
  | 'transparent';

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
  | 'on-inverse-surface'
  | 'on-inverse-surface-primary';
