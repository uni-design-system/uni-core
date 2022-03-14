import { Color } from '../color/color.model';
import { MaskingShape } from './masking.types';

export interface Masking {
  background: Color;
  shape: MaskingShape;
}
