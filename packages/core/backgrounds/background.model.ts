import { IGradient } from '../gradients/gradient.model';
import { IColor } from '../color/color.model';
import { backgrounds } from './background.types';

export interface IBackground {
  type: backgrounds;
  color: IColor;
  gradient: IGradient;
  image: string;
}
