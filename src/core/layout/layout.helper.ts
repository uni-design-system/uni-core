import { Size } from '../core.types';
import { DeviceOrientation } from './layout.types';

export function getDeviceSize(height: number, width: number): Size {

  if (!height || !width) return 'md';

  const max = Math.max(height, width);

  if (max <= 600) // Small Mobile
    return 'xs';

  if (max <= 960) // Large Mobile
    return 'sm';

  if (max <= 1264) // Tablets
    return 'md';

  if (max <= 1904) // Laptops & Monitors
    return 'lg';

  return 'xl' // Large Monitors
}

export function getDeviceOrientation(height: number, width: number): DeviceOrientation {

  if (!height || !width) return 'landscape';

  return height > width ? 'portrait' : 'landscape'

}
