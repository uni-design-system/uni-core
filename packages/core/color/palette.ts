// https://designerup.co/blog/ui-design-choosing-color-palettes/
// https://designerup.co/blog/practical-guide-to-perfect-ui-color-palettes/

// Red - used to indicate error, danger, wrong.
// Green - used to indicate success saved or correct.
// Yellow - used for temporary alert, caution, warnings.
// Blue  - used for information.

export type schemes = 'monochromatic' | 'analogous' | 'complimentary' | 'splitComplimentary' | 'triadic';

export type categories = 'jewel' | 'pastel' | 'earth' | 'neutral' | 'florescent' | 'shades';

export const saturationRangeMap: { [id in categories]: string } = {
  jewel: '73-83',
  pastel: '14-21',
  earth: '36-41',
  neutral: '1-10',
  florescent: '63-100',
  shades: '0-0'
};

export const brightnessRangeMap: { [id in categories]: string } = {
  jewel: '56-76',
  pastel: '89-96',
  earth: '36-77',
  neutral: '70-99',
  florescent: '82-100',
  shades: '0-100'
};
