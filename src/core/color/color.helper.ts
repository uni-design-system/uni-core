import { HSL, HSLA, RGB, UniColor } from './color.model';
import { CategoryLightness, CategorySaturation, RoleHues } from './color.records';
import { randomRangeValue } from './color.utils';

export function HSLAToString({ hue, saturation, lightness, alpha = 1 }: HSLA): string {
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
}

export function uniColor({ role, category, alpha = 1 }: UniColor): string {
  const hue = randomRangeValue(RoleHues[role]);
  const saturation = randomRangeValue(CategorySaturation[category]);
  const lightness = randomRangeValue(CategoryLightness[category]);

  return HSLAToString({ hue, saturation, lightness, alpha });
}

export const RGBToHSL = ({ red, green, blue }: RGB): HSL => {
  red /= 255;
  green /= 255;
  blue /= 255;
  const l = Math.max(red, green, blue);
  const s = l - Math.min(red, green, blue);
  const h = s ? (l === red ? (green - blue) / s : l === green ? 2 + (blue - red) / s : 4 + (red - green) / s) : 0;
  return {
    hue: 60 * h < 0 ? 60 * h + 360 : 60 * h,
    saturation: 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    lightness: (100 * (2 * l - s)) / 2,
  };
};
