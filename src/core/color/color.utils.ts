import { Range } from './color.model';

export const randomRangeValue = ({ low, high }: Range): number => {
  low = Math.ceil(low);
  high = Math.floor(high);
  return Math.floor(Math.random() * (high - low + 1)) + low;
};
