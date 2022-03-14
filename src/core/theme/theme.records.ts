import { Theme } from './theme.model';
import { DarkTheme } from './themes/dark.theme';
import { LightTheme } from './themes/light.theme';

export const BuiltInThemes: Record<string, Theme> = {
  LightTheme,
  DarkTheme
}

// First Theme is default.
export const DefaultThemeId = Object.keys(BuiltInThemes)[0];
