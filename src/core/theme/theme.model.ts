
export interface ThemeProps {
  themeId?: string;
  themes?: Record<string, ThemeModel>;
  setTheme?: any;
}

export interface ThemeModel {
  name: string;
  id: string;
  colors: Record<string, string>;
}
