import { Shadow, ShadowDefinition } from './shadow.model';

// box-shadow: none|h-offset v-offset blur spread color
export const GetBoxShadow = ({ offset, blur, opacity }: Shadow): string => {
  return `0 ${offset}px ${blur}px rgba(0,0,0,0.${opacity})`;
};

export const GetBoxShadows = ({ umbra, penumbra }: ShadowDefinition): string => {
  return GetBoxShadow(umbra) + ', ' + GetBoxShadow(penumbra);
};
