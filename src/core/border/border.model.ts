import { ColorToken } from '../color';

export interface Border {
  colorAll: ColorToken;
  colorTop: ColorToken;
  colorBottom: ColorToken;
  colorLeft: ColorToken;
  colorRight: ColorToken;
  widthAll: number;
  widthTop: number;
  widthBottom: number;
  widthLeft: number;
  widthRight: number;
}
