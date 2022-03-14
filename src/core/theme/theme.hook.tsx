import React from 'react';
import ThemeContext from './theme.context';
import { Theme} from './theme.model';
import { LightTheme } from './themes/light.theme';

export default function useTheme(): Theme {

  const themeProps = React.useContext(ThemeContext);

  const theme = themeProps && themeProps.themes && themeProps.themeId && themeProps.themes[themeProps.themeId];

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useDebugValue(theme);
  }

  return theme || LightTheme;
}
