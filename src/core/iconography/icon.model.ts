import { Color } from '../color';
import { Masking } from '../masking';

export interface Icon {
  background: Color;
  foreground: Color;
  mask: Masking;
}
