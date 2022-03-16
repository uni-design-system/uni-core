import { Theme } from '../theme.model';

export const BaseTheme: Theme = {
  id: 'BaseTheme',
  name: 'Base Theme',
  colors: {
    primary: '#35A7FF',
    secondary: '#38618C',
    error: '#FFE74C',
    warn: '#FF5964',
    background: '#FFFFFF'
  },
  typography: {
    'headline-1': {
      fontSize: 96,
      fontWeight: 'light',
      letterSpacing: -1.5
    },
    'headline-2': {
      fontSize: 60,
      fontWeight: 'light',
      letterSpacing: -0.1
    },
    'headline-3': {
      fontSize: 48,
    },
    'headline-4': {
      fontSize: 34,
      letterSpacing: 0.25
    },
    'headline-5': {
      fontSize: 24
    },
    'headline-6': {
      fontSize: 20,
      fontWeight: 'medium',
      letterSpacing: 0.15
    },
    'body-1-long': {
      fontSize: 16,
      lineHeight: 22
    },
    'body-1-short': {
      fontSize: 16,
      lineHeight: 24
    },
    'body-2-long': {
      fontSize: 14,
      lineHeight: 18
    },
    'body-2-short': {
      fontSize: 14,
      lineHeight: 20
    },
    title: {
      fontSize: 48
    },
    'subtitle-1': {
      fontSize: 16,
      letterSpacing: 0.15
    },
    'subtitle-2': {
      fontSize: 14,
      fontWeight: 'medium',
      letterSpacing: 0.1
    },
    label: {
      fontSize: 14
    },
    button: {
      fontSize: 14,
      fontWeight: 'medium',
      textTransform: 'uppercase'
    },
    caption: {
      fontSize: 12,
      letterSpacing: 0.4
    },
    overline: {
      fontSize: 10,
      letterSpacing: 1.5,
      textTransform: 'uppercase'
    },
    paragraph: {
      fontSize: 16
    },
    quote: {
      fontSize: 16
    },
    note: {
      fontSize: 14,
      fontStyle: 'italic'
    }
  }
}
