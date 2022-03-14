import { Color } from '../color/color.model';
import { Masking } from '../masking/masking.model';

export interface Icon {
  background: Color;
  foreground: Color;
  mask: Masking;
}
