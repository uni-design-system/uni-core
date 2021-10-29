
export type elements = 'margin' | 'border' | 'padding';

export type apply = 'left' | 'right' | 'top' | 'bottom' | 'vertical' | 'horizontal' | 'all';

export type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';

export const spacings: Record<size, number> = { xs: 5, sm: 8, md: 13, lg: 21, xl: 34, none: 0 };
