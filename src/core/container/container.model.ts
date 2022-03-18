import { BackgroundType } from '../background';
import { BorderWidth } from '../border';
import { ColorToken } from '../color';
import { Apply, HorizontalAlign, RadiusApply, Size } from '../core.types';
import { ShadowDefinition } from '../shadow';

export interface ContainerProps {
  maxWidth?: number;
  align?: HorizontalAlign;

  backgroundType?: BackgroundType;
  shadow?: ShadowDefinition;

  backgroundColor?: ColorToken;
  textColor?: ColorToken;

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

  Spacings?: Record<Size, number>;
  TopSpacings?: Record<Size, number>;
}
