
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';

export type Apply = 'left' | 'right' | 'top' | 'bottom' | 'vertical' | 'horizontal' | 'all';

export type TextAlignment = 'left' | 'right' | 'center';

export type ColorRole = 'primary' | 'secondary' | 'tertiary' | 'alert' | 'warn' | 'inverse' | 'ghost';

export const Spacings: Record<Size, number> = { xs: 5, sm: 8, md: 13, lg: 21, xl: 34, none: 0 };

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
