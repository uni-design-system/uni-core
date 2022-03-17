import { TextRole, TextStyle } from '../typography';
import { ColorToken } from '../color';

export interface ThemeProps {
  themeId?: string;
  themes?: Record<string, Theme>;
  setTheme?: any;
}

export interface Theme {
  name: string;
  id: string;
  colors: Record<ColorToken, string>;
  typography: Record<TextRole, TextStyle>
}
