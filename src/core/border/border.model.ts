import { ColorToken } from '../color';
import { StrokeWidth } from '../core.types';

export interface Border {
  color?: ColorToken;
  colorTop?: ColorToken;
  colorBottom?: ColorToken;
  colorLeft?: ColorToken;
  colorRight?: ColorToken;
  width?: StrokeWidth;
  widthTop?: StrokeWidth;
  widthBottom?: StrokeWidth;
  widthLeft?: StrokeWidth;
  widthRight?: StrokeWidth;
}
