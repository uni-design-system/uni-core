import { Theme } from '../theme.model';
import { BaseTheme } from './base.theme';

export const DarkTheme: Theme = {
  ...BaseTheme,
  id: 'DarkTheme',
  name: 'Dark Theme',
  colors: {
    'primary': '#D0BCFF',
    'on-primary': '#371E73',
    'primary-container': '#4F378B',
    'on-primary-container': '#EADDFF',
    'secondary': '#CCC2DC',
    'on-secondary': '#332D41',
    'secondary-container': '#4A4458',
    'on-secondary-container': '#E8DEF8',
    'tertiary': '#EFB8C8',
    'on-tertiary': '#492532',
    'tertiary-container': '#633B48',
    'on-tertiary-container': '#FFD8E4',
    'error': '#F2B8B5',
    'on-error': '#601410',
    'error-container': '#8C1D18',
    'on-error-container': '#F9DEDC',
    'background': '#1C1B1F',
    'on-background': '#E6E1E5',
    'surface': '#1C1B1F',
    'on-surface': '#E6E1E5',
    'surface-variant': '#49454F',
    'on-surface-variant': '#CAC4D0',
    'outline': '#938F99',
    'shadow': '#000000',
    'surface-tint': '#D0BCFF',
    'inverse-surface': '#E6E1E5',
    'inverse-on-surface': '#313033',
    'inverse-on-surface-primary': '#6750A4',
    'transparent': 'rgba(0,0,0,0)'
  }
}
