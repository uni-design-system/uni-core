import React from 'react';
import { ThemeProps } from './theme.model';

const ThemeContext = React.createContext<ThemeProps>({});

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

export default ThemeContext;
