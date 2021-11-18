import { IColor } from '../color/color.model';
import { MaskingShape } from './masking.types';

export interface IMasking {
  background: IColor;
  shape: MaskingShape;
}
