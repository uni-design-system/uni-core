import { Theme } from '../theme.model';
import { BaseTheme } from './base.theme';

export const DarkTheme: Theme = {
  ...BaseTheme,
  id: 'DarkTheme',
  name: 'Dark Theme',
  colors: {
    ...BaseTheme.colors,
    background: '#000000'
  }
}
