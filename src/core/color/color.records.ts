import { Range } from './color.model';
import { ColorCategory, ColorRole, UtilityColorRole } from './color.types';

export const CategorySaturation: Record<ColorCategory, Range> = {
  jewel: { low: 73, high: 83 },
  pastel: { low: 14, high: 21 },
  earth: { low: 36, high: 41 },
  neutral: { low: 1, high: 10 },
  florescent: { low: 63, high: 100 },
  shades: { low: 0, high: 0 },
};

export const CategoryLightness: Record<ColorCategory, Range> = {
  jewel: { low: 56, high: 76 },
  pastel: { low: 89, high: 96 },
  earth: { low: 36, high: 77 },
  neutral: { low: 70, high: 99 },
  florescent: { low: 82, high: 100 },
  shades: { low: 0, high: 100 },
};

export const RoleHues: Record<ColorRole | UtilityColorRole, Range> = {
  primary: { low: 73, high: 83, default: 0 },
  secondary: { low: 14, high: 21, default: 0 },
  tertiary: { low: 36, high: 41, default: 0 },
  inverse: { low: 63, high: 100, default: 0 },
  ghost: { low: 0, high: 0, default: 0 },
  warn: { low: 320, high: 20, default: 0 }, // red
  alert: { low: 40, high: 70, default: 60 }, // yellow
  success: { low: 90, high: 150, default: 120 }, // green
  info: { low: 200, high: 260, default: 240 }, // blue
};
