import { FontWeight, TextDecoration, TextTransform } from './typography.types';
import { SizeMap } from '../core.types';

export interface TextStyle {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontScale?: SizeMap
  fontWeight?: FontWeight;
  fontStyle?: 'italic';
  textTransform?: TextTransform;
  textDecoration?: TextDecoration;
  letterSpacing?: number;
  textIndent?: number;
  wordSpacing?: number;
  whiteSpace?: 'nowrap';
}
