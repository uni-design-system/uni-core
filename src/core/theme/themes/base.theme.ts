import { Theme } from '../theme.model';
import { Button } from '../../button';
import { Container } from '../../container';

const BaseButton: Partial<Button> = {
  verticalPadding: { xs: 4, sm: 8, md: 12, lg: 16, xl: 20 },
  horizontalPadding: { xs: 12, sm: 18, md: 24, lg: 30, xl: 36 },
  borderRadius: 100,
}

const BaseContainer: Partial<Container> = {
  borderRadii: { xs: 8, sm: 12, md: 16, lg: 20, xl: 24 },
  padding: { xs: 12, sm: 18, md: 24, lg: 30, xl: 36 },
  contentSpacing: { xs: 8, sm: 12, md: 16, lg: 20, xl: 24 },
}

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
    'inverse-on-surface-primary': '#D0BCFF',
    'transparent': 'rgba(0,0,0,0)'
  },
  typography: {
    'display-large': {
      fontFamily: 'Red Hat Display',
      fontSize: 57,
      lineHeight: 64,
      fontWeight: 'normal',
      letterSpacing: -0.25
    },
    'display-medium': {
      fontFamily: 'Red Hat Display',
      fontSize: 45,
      lineHeight: 52,
      fontWeight: 'normal'
    },
    'display-small': {
      fontFamily: 'Red Hat Display',
      fontSize: 36,
      lineHeight: 44,
      fontWeight: 'normal'
    },
    'headline-large': {
      fontFamily: 'Red Hat Display',
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 'normal'
    },
    'headline-medium': {
      fontFamily: 'Red Hat Display',
      fontSize: 28,
      lineHeight: 36,
      fontWeight: 'normal'
    },
    'headline-small': {
      fontFamily: 'Red Hat Display',
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'normal'
    },
    'title-large': {
      fontFamily: 'Red Hat Display',
      fontSize: 22,
      lineHeight: 28,
      fontWeight: 'normal'
    },
    'title-medium': {
      fontFamily: 'Red Hat Display',
      fontSize: 16,
      lineHeight: 24,
      fontWeight: 'medium',
      letterSpacing: 0.15
    },
    'title-small': {
      fontFamily: 'Red Hat Display',
      fontWeight: 'medium',
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1
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
    'subtitle-1': {
      fontFamily: 'Red Hat Display',
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.15
    },
    'subtitle-2': {
      fontFamily: 'Red Hat Display',
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 'medium',
      letterSpacing: 0.1
    },
    label: {
      fontFamily: 'Roboto',
      fontSize: 14,
      lineHeight: 20
    },
    button: {
      fontFamily: 'Red Hat Display',
      fontSize: 14,
      lineHeight: 20,
      fontWeight: 'medium',
      textTransform: 'capitalize'
    },
    caption: {
      fontFamily: 'Roboto',
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: 0.4
    },
    overline: {
      fontFamily: 'Red Hat Display',
      fontSize: 10,
      lineHeight: 18,
      letterSpacing: 1.5,
      textTransform: 'uppercase'
    },
    paragraph: {
      fontFamily: 'Roboto',
      fontSize: 16,
      lineHeight: 24
    },
    quote: {
      fontFamily: 'Roboto',
      fontSize: 16,
      lineHeight: 24
    },
    note: {
      fontFamily: 'Roboto',
      fontSize: 14,
      lineHeight: 22,
      fontStyle: 'italic'
    }
  },
  buttons: {
    elevated: {
      ...BaseButton,
      color: 'surface',
      shadowElevation: 'raised'
    },
    filled: {
      ...BaseButton,
      color: 'primary',
    },
    'filled-secondary': {
      ...BaseButton,
      color: 'secondary',
    },
    outlined: {
      ...BaseButton,
      color: 'transparent',
      borderColor: 'primary',
      borderWidth: 1
    },
    text: {
      ...BaseButton,
      color: 'transparent',
    },
    icon: {
      ...BaseButton,
      color: 'transparent',
    },
    'floating-action': {
      ...BaseButton,
      color: 'secondary',
      borderRadius: 100,
      shadowElevation: 'navigation',
    }
  },
  containers: {
    card: {
      ...BaseContainer,
      color: 'surface',
      contentColor: 'on-surface',
      shadowMode: 'interactive'
    },
    screen: {
      ...BaseContainer,
      color: 'background',
      contentColor: 'on-background'
    },
    modal: {
      ...BaseContainer,
      borderRadii: { xs: 16, sm: 22, md: 28, lg: 32, xl: 38 },
      color: 'surface',
      contentColor: 'on-surface',
      shadowMode: 'static',
      shadowElevation: 'modal',
      maxWidth: 560
    }
  }
}
