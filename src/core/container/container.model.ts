import { BackgroundType } from '../background';
import { BorderWidth } from '../border';
import { ColorToken, ContainerColorToken, ContentColorToken } from '../color';
import { Apply, HorizontalAlign, RadiusApply, Size, SizeMap } from '../core.types';
import { ShadowElevation, ShadowMode } from '../shadow';

export interface Container {

  maxWidth?: number;
  align?: HorizontalAlign;

  contentSpacing?: SizeMap;

  topPadding?: SizeMap;
  padding?: SizeMap;
  spacing?: SizeMap;

  backgroundType?: BackgroundType;

  borderRadii?: SizeMap;

  shadowMode?: ShadowMode;
  shadowElevation?: ShadowElevation

  color: ContainerColorToken;
  contentColor: ContentColorToken;

  blur?: {
    amount?: number;
  };

  border?: {
    apply?: Apply;
    applyAsSeparator?: boolean;
    color?: ColorToken;
    thickness?: BorderWidth;
  };

  radius?: {
    size?: Size;
    apply?: RadiusApply;
  };



  gradient?: {
    degree?: number;
    colors?: string[];
  };

  imageConfig?: {
    src?: string;
  };

  margin?: {
    horizontal?: SizeMap;
    bottom?: SizeMap;
    top?: SizeMap;
  };



}
