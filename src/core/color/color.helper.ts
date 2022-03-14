import { Color } from './color.model';
import { colorCategories, colorRoles, roleHues } from './color.types';

export function hslColor(c: Color): string {
  return `hsl(${c.hue}, ${c.saturation}, ${c.lightness}, ${c.alpha})`;
}

export function roleColor(r: colorRoles): string {

  const hue = roleHues[r].default;
  const role: colorRoles = r;
  const alpha = 1;
  const category: colorCategories = 'jewel';

  return hslColor({ role, category, hue, alpha });
}
