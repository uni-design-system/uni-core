import { ShadowElevation } from '../shadow';
import { ColorToken } from '../color';
import { Size } from '../core.types';
import { Border } from '../border';

export interface Button {
  color: ColorToken;
  elevation?: ShadowElevation;
  borderWidth?: number;
  borderColor?: ColorToken;
  borderRadius?: number;
  borderRadii?: Record<Size, number>;
  horizontalPadding?: number;
  horizontalPaddings?: Record<Size, number>;
  verticalPadding?: number;
  verticalPaddings?: Record<Size, number>;
  border?: Border;
  shadowElevation?: ShadowElevation
}
