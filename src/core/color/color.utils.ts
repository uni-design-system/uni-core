import { Range } from './color.model';

export const randomRangeValue = ({ low, high }: Range): number => {
  low = Math.ceil(low);
  high = Math.floor(high);
  return Math.floor(Math.random() * (high - low + 1)) + low;
};

export const cycle = (angle: number): number => {
  if (angle > 360) return angle - 360;
  if (angle < 0) return angle + 360;
  return angle;
};

export const getAnalogousHues = (hue: number): number[] => [cycle(hue + 30), cycle(hue + 60)];
export const getComplimentaryHue = (hue: number): number => cycle(hue + 180);
export const getTriadicHues = (hue: number): number[] => [cycle(hue + 120), cycle(hue - 120)];
export const getSplitComplimentaryHues = (hue: number): number[] => [cycle(hue + 150), cycle(hue - 150)];
