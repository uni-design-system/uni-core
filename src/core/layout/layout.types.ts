import { size } from '../base.types';

export type elements = 'margin' | 'border' | 'padding';

export const spacings: Record<size, number> = { xs: 5, sm: 8, md: 13, lg: 21, xl: 34, none: 0 };
