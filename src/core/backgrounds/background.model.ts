import { Gradient } from '../gradients/gradient.model';
import { Color } from '../color/color.model';
import { BackgroundType } from './background.types';

export interface Background {
  type: BackgroundType;
  color: Color;
  gradient: Gradient;
  image: string;
}
