import { BackgroundType } from '../backgrounds/background.types';
import { BorderWidth } from '../border/border.types';
import { ColorToken } from '../color/color.types';
import { Apply, HorizontalAlign, RadiusApply, Size } from '../core.types';
import { ShadowStyle } from '../shadow/shadow.types';

export interface ContainerProps {
  maxWidth?: number;
  align?: HorizontalAlign;

  backgroundType?: BackgroundType;
  shadowStyle?: ShadowStyle;

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
