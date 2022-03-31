import { TextRole, TextStyle } from '../typography';
import { ColorToken } from '../color';
import { Button, ButtonType } from '../button';
import { Container, ContainerType } from '../container';

export interface ThemeProps {
  themeId?: string;
  themes?: Record<string, Theme>;
  setTheme?: any;
}

export interface Theme {
  name: string;
  id: string;
  colors: Record<ColorToken, string>;
  typography: Record<TextRole, TextStyle>;
  buttons: Record<ButtonType, Button>;
  containers: Record<ContainerType, Container>;
}
