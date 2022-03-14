import { Color } from '../color';

export interface Gradient {
  defaultColor: Color;
  degree: number,
  colors: Record<string, Color>
}
