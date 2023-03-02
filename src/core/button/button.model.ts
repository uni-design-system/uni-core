import { ShadowElevation } from '../shadow';
import { ColorToken } from '../color';
import { SizeMap, StrokeWidth } from '../core.types';
import { Border } from '../border';

export interface Button {
  color: ColorToken;
  contentColor: ColorToken;
  elevation?: ShadowElevation;
  borderWidth?: StrokeWidth;
  borderColor?: ColorToken;
  borderRadius?: number;
  borderRadii?: SizeMap;
  horizontalPadding: SizeMap;
  verticalPadding: SizeMap;
  border?: Border;
  shadowElevation?: ShadowElevation;
}
