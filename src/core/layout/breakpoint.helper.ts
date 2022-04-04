import { Size } from '../core.types';
import { Breakpoints } from './layout.records';

export function getScreenSize(width: number): Size {

  if (!width) return 'md';

  if (width < Breakpoints['xs'])
    return 'xs';

  if (width < Breakpoints['sm'])
    return 'sm';

  if (width < Breakpoints['md'])
    return 'md';

  if (width < Breakpoints['lg'])
    return 'lg';

  return 'xl'
}
