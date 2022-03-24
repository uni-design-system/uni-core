import { FontWeight, TextDecoration, TextTransform } from './typography.types';
import { Size } from '../core.types';

export interface TextStyle {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontScale?: Record<Size, number>
  fontWeight?: FontWeight;
  fontStyle?: 'italic';
  textTransform?: TextTransform;
  textDecoration?: TextDecoration;
  letterSpacing?: number;
  textIndent?: number;
  wordSpacing?: number;
  whiteSpace?: 'nowrap';
}
