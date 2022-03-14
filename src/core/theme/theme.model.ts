
export interface ThemeProps {
  themeId?: string;
  themes?: Record<string, Theme>;
  setTheme?: any;
}

export interface Theme {
  name: string;
  id: string;
  colors: Record<string, string>;
}
