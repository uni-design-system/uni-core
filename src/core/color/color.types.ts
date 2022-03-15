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

export type ColorToken =
  | 'background'
  | 'background-active'
  | 'background-brand'
  | 'background-hover'
  | 'background-inverse'
  | 'background-inverse-hover'
  | 'background-screen'
  | 'background-selected'
  | 'background-selected-hover'
  | 'border-disabled-01'
  | 'border-disabled-02'
  | 'border-disabled-03'
  | 'border-interactive'
  | 'border-inverse'
  | 'border-strong-01'
  | 'border-strong-02'
  | 'border-strong-03'
  | 'border-subtle-00'
  | 'border-subtle-01'
  | 'border-subtle-02'
  | 'border-subtle-03'
  | 'border-subtle-selected-01'
  | 'border-subtle-selected-02'
  | 'border-subtle-selected-03'
  | 'brand-primary'
  | 'button-primary'
  | 'button-primary-active'
  | 'button-primary-hover'
  | 'button-secondary'
  | 'button-secondary-active'
  | 'button-secondary-hover'
  | 'button-tertiary'
  | 'button-tertiary-active'
  | 'button-tertiary-hover'
  | 'button-danger-primary'
  | 'button-danger-secondary'
  | 'button-danger-active'
  | 'button-danger-hover'
  | 'button-disabled'
  | 'button-separator'
  | 'field-01'
  | 'field-02'
  | 'field-03'
  | 'field-disabled-01'
  | 'field-disabled-02'
  | 'field-disabled-03'
  | 'field-hover-01'
  | 'field-hover-02'
  | 'field-hover-03'
  | 'focus'
  | 'focus-inverse'
  | 'focus-inset'
  | 'highlight'
  | 'icon-primary'
  | 'icon-secondary'
  | 'icon-tertiary'
  | 'icon-inverse'
  | 'icon-on-color'
  | 'icon-on-color-disabled'
  | 'icon-disabled'
  | 'icon-subtle'
  | 'interactive'
  | 'layer-01'
  | 'layer-02'
  | 'layer-03'
  | 'layer-accent-01'
  | 'layer-accent-02'
  | 'layer-accent-03'
  | 'layer-accent-active-01'
  | 'layer-accent-active-02'
  | 'layer-accent-active-03'
  | 'layer-accent-hover-01'
  | 'layer-accent-hover-02'
  | 'layer-accent-hover-03'
  | 'layer-active-01'
  | 'layer-active-02'
  | 'layer-active-03'
  | 'layer-disabled-01'
  | 'layer-disabled-02'
  | 'layer-disabled-03'
  | 'layer-hover-01'
  | 'layer-hover-02'
  | 'layer-hover-03'
  | 'layer-selected-01'
  | 'layer-selected-02'
  | 'layer-selected-03'
  | 'layer-selected-hover-01'
  | 'layer-selected-hover-02'
  | 'layer-selected-hover-03'
  | 'layer-selected-disabled'
  | 'layer-selected-inverse'
  | 'link-primary'
  | 'link-primary-hover'
  | 'link-secondary'
  | 'link-inverse'
  | 'link-visited'
  | 'navigation-background'
  | 'navigation-badge'
  | 'navigation-border'
  | 'overlay'
  | 'screen-background'
  | 'skeleton-element'
  | 'skeleton-background'
  | 'status-online'
  | 'status-offline'
  | 'status-busy'
  | 'support-info'
  | 'support-warning'
  | 'support-success'
  | 'support-error'
  | 'support-info-inverse'
  | 'support-warning-inverse'
  | 'support-success-inverse'
  | 'support-error-inverse'
  | 'text-brand'
  | 'text-primary'
  | 'text-secondary'
  | 'text-disabled'
  | 'text-error'
  | 'text-ghost'
  | 'text-helper'
  | 'text-highlight'
  | 'text-link'
  | 'text-inverse'
  | 'text-on-color'
  | 'text-placeholder'
  | 'text-on-color-disabled'
  | 'text-warning'
  | 'toggle-off'
  | 'transparent'
  | 'shadowColor'
  ;
