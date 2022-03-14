import { Color } from '../color/color.model';

export interface Gradient {
  defaultColor: Color;
  degee: number,
  colors: Record<string, Color>
}
