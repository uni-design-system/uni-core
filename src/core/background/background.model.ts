import { Gradient } from '../gradient';
import { Color } from '../color';
import { BackgroundType } from './background.types';

export interface Background {
  type: BackgroundType;
  color: Color;
  gradient: Gradient;
  image: string;
}
