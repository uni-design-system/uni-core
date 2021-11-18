import { IColor } from '../color/color.model';

export interface IGradient {
  defaultColor: IColor;
  degee: number,
  colors: Record<string, IColor>
}
