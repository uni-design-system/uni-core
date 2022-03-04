import { IColor } from '../color/color.model';
import { IMasking } from '../masking/masking.model';

export interface Icon {
  background: IColor;
  foreground: IColor;
  mask: IMasking;
}
