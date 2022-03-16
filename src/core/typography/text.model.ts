import { FontWeight, TextDecoration, TextTransform } from './typography.types';

export interface TextStyle {
  fontFamily?: string;
  fontSize: number;
  fontWeight?: FontWeight;
  fontStyle?: 'italic';
  textTransform?: TextTransform;
  textDecoration?: TextDecoration;
  letterSpacing?: number;
  textIndent?: number;
  lineHeight?: number;
  wordSpacing?: number;
  whiteSpace?: 'nowrap';
}
