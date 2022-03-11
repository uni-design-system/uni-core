import { Size } from '../core.types';

export type elements = 'margin' | 'border' | 'padding';

export const spacings: Record<Size, number> = { xs: 5, sm: 8, md: 13, lg: 21, xl: 34 };
