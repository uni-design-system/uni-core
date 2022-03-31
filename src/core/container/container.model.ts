import { BackgroundType } from '../background';
import { BorderWidth } from '../border';
import { ColorToken, ContainerColorToken, ContentColorToken } from '../color';
import { Apply, HorizontalAlign, RadiusApply, Size } from '../core.types';
import { ShadowElevation, ShadowMode } from '../shadow';

export interface Container {

  maxWidth?: number;
  align?: HorizontalAlign;

  contentSpacing?: Record<Size, number>;

  topPadding?: Record<Size, number>;
  padding?: Record<Size, number>;
  spacing?: Record<Size, number>;

  backgroundType?: BackgroundType;

  borderRadii?: Record<Size, number>;

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
    horizontal?: Record<Size, number>;
    bottom?: Record<Size, number>;
    top?: Record<Size, number>;
  };



}
