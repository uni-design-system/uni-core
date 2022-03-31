import { Size } from '../core.types';
import { Breakpoints } from './layout.records';

export function getScreenSize(width: number): Size {

  if (!width) return 'md';

  ['xs', 'sm', 'md', 'lg'].forEach(key => {
    const breakpoint = Breakpoints[key as Size];
    if (width < breakpoint) return key;
  })

  return 'xl'
}
