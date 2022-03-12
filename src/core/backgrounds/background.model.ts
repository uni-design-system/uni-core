import { IGradient } from '../gradients/gradient.model';
import { IColor } from '../color/color.model';
import { BackgroundType } from './background.types';

export interface IBackground {
  type: BackgroundType;
  color: IColor;
  gradient: IGradient;
  image: string;
}
