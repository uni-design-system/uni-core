import { Theme } from '../theme.model';

export const BaseTheme: Theme = {
  id: 'BaseTheme',
  name: 'Base Theme',
  colors: {
    'primary': '#6750A4',
    'on-primary': '#FFFFFF',
    'primary-container': '#EADDFF',
    'on-primary-container': '#21005E',
    'secondary': '#625B71',
    'on-secondary': '#FFFFFF',
    'secondary-container': '#E8DEF8',
    'on-secondary-container': '#1E192B',
    'tertiary': '#7D5260',
    'on-tertiary': '#FFFFFF',
    'tertiary-container': '#FFD8E4',
    'on-tertiary-container': '#370B1E',
    'error': '#B3261E',
    'on-error': '#FFFFFF',
    'error-container': '#F9DEDC',
    'on-error-container': '#370B1E',
    'background': '#FFFBFE',
    'on-background': '#1C1B1F',
    'surface': '#FFFBFE',
    'on-surface': '#1C1B1F',
    'surface-variant': '#E7E0EC',
    'on-surface-variant': '#49454E',
    'outline': '#79747E',
    'shadow': '#000000',
    'surface-tint': '#6750A4',
    'inverse-surface': '#313033',
    'inverse-on-surface': '#F4EFF4',
    'inverse-primary': '#D0BCFF',
    'transparent': 'rgba(0,0,0,0)'
  },
  typography: {
    'headline-1': {
      fontFamily: 'Red Hat Display',
      fontSize: 96,
      fontWeight: 'light',
      letterSpacing: -1.5
    },
    'headline-2': {
      fontFamily: 'Red Hat Display',
      fontSize: 60,
      fontWeight: 'light',
      letterSpacing: -0.1
    },
    'headline-3': {
      fontFamily: 'Red Hat Display',
      fontSize: 48,
    },
    'headline-4': {
      fontFamily: 'Red Hat Display',
      fontSize: 34,
      letterSpacing: 0.25
    },
    'headline-5': {
      fontFamily: 'Red Hat Display',
      fontSize: 24
    },
    'headline-6': {
      fontFamily: 'Red Hat Display',
      fontSize: 20,
      fontWeight: 'medium',
      letterSpacing: 0.15
    },
    'body-1-long': {
      fontFamily: 'Roboto',
      fontSize: 16,
      lineHeight: 22
    },
    'body-1-short': {
      fontFamily: 'Roboto',
      fontSize: 16,
      lineHeight: 24
    },
    'body-2-long': {
      fontFamily: 'Roboto',
      fontSize: 14,
      lineHeight: 18
    },
    'body-2-short': {
      fontFamily: 'Roboto',
      fontSize: 14,
      lineHeight: 20
    },
    title: {
      fontFamily: 'Red Hat Display',
      fontSize: 48
    },
    'subtitle-1': {
      fontFamily: 'Red Hat Display',
      fontSize: 16,
      letterSpacing: 0.15
    },
    'subtitle-2': {
      fontFamily: 'Red Hat Display',
      fontSize: 14,
      fontWeight: 'medium',
      letterSpacing: 0.1
    },
    label: {
      fontFamily: 'Roboto',
      fontSize: 14
    },
    button: {
      fontFamily: 'Red Hat Display',
      fontSize: 14,
      fontWeight: 'medium',
      textTransform: 'uppercase'
    },
    caption: {
      fontFamily: 'Roboto',
      fontSize: 12,
      letterSpacing: 0.4
    },
    overline: {
      fontFamily: 'Red Hat Display',
      fontSize: 10,
      letterSpacing: 1.5,
      textTransform: 'uppercase'
    },
    paragraph: {
      fontFamily: 'Roboto',
      fontSize: 16
    },
    quote: {
      fontFamily: 'Roboto',
      fontSize: 16
    },
    note: {
      fontFamily: 'Roboto',
      fontSize: 14,
      fontStyle: 'italic'
    }
  },
  buttons: {
    elevated: {
      color: 'surface',
      verticalPadding: 12,
      verticalPaddings: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
      horizontalPadding: 24,
      horizontalPaddings: { xs: 12, sm: 18, md: 24, lg: 30, xl: 36 },
      shadowElevation: 'raised'
    },
    filled: {
      color: 'primary',
      verticalPadding: 12,
      verticalPaddings: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
      horizontalPadding: 24,
      horizontalPaddings: { xs: 12, sm: 18, md: 24, lg: 30, xl: 36 },
    },
    'filled-secondary': {
      color: 'secondary',
      verticalPadding: 12,
      verticalPaddings: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
      horizontalPadding: 24,
      horizontalPaddings: { xs: 12, sm: 18, md: 24, lg: 30, xl: 36 },
    },
    outlined: {
      color: 'transparent',
      verticalPadding: 12,
      verticalPaddings: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
      horizontalPadding: 24,
      horizontalPaddings: { xs: 12, sm: 18, md: 24, lg: 30, xl: 36 },
      border: {
        colorAll: 'primary',
        widthAll: 1
      }
    },
    text: {
      color: 'transparent',
      verticalPadding: 12,
      verticalPaddings: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
      horizontalPadding: 16,
      horizontalPaddings: { xs: 8, sm: 12, md: 16, lg: 20, xl: 24 },
    },
    icon: {
      color: 'transparent',
      verticalPadding: 12,
      verticalPaddings: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
      horizontalPadding: 16,
      horizontalPaddings: { xs: 8, sm: 12, md: 16, lg: 20, xl: 24 },
    },
    'floating-action': {
      color: 'secondary',
      shadowElevation: 'navigation'
    }
  }
}
