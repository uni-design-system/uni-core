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
      fontFamily: 'san-serif',
      fontSize: 16,
      lineHeight: 22
    },
    'body-1-short': {
      fontFamily: 'san-serif',
      fontSize: 16,
      lineHeight: 24
    },
    'body-2-long': {
      fontFamily: 'san-serif',
      fontSize: 14,
      lineHeight: 18
    },
    'body-2-short': {
      fontFamily: 'san-serif',
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
      fontFamily: 'san-serif',
      fontSize: 14
    },
    button: {
      fontFamily: 'Red Hat Display',
      fontSize: 14,
      fontWeight: 'medium',
      textTransform: 'uppercase'
    },
    caption: {
      fontFamily: 'san-serif',
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
      fontFamily: 'san-serif',
      fontSize: 16
    },
    quote: {
      fontFamily: 'san-serif',
      fontSize: 16
    },
    note: {
      fontFamily: 'san-serif',
      fontSize: 14,
      fontStyle: 'italic'
    }
  }
}
