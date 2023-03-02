import { Color } from '../color';
import { MaskingShape } from './masking.types';

export interface Masking {
  background: Color;
  shape: MaskingShape;
}
