import { ColorToken } from '../color';

export interface Border {
  colorTop: ColorToken;
  colorBottom: ColorToken;
  colorLeft: ColorToken;
  colorRight: ColorToken;
  widthTop: number;
  widthBottom: number;
  widthLeft: number;
  widthRight: number;
}
