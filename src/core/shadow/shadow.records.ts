import { ShadowDefinition } from './shadow.model';
import { ShadowElevation } from './shadow.types';

// box-shadow: none|h-offset v-offset blur spread color

export const ShadowCssMap: Record<ShadowElevation, string> = {
  pressed: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  raised: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  focussed: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  navigation: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  modal: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
}

export const ShadowMap: Record<ShadowElevation, ShadowDefinition> = {
  pressed: {
    umbra: {
      offset: 1, blur: 2, opacity: 24 },
    penumbra: {
      offset: 1, blur: 3, opacity: 12 }
  },
  raised: {
    umbra: {
      offset: 3, blur: 6, opacity: 23 },
    penumbra: {
      offset: 3, blur: 6, opacity: 16 }
  },
  focussed: {
    umbra: {
      offset: 6, blur: 6, opacity: 23 },
    penumbra: {
      offset: 10, blur: 20, opacity: 19 }
  },
  navigation: {
    umbra: {
      offset: 10, blur: 10, opacity: 22 },
    penumbra: {
      offset: 14, blur: 28, opacity: 25 }
  },
  modal: {
    umbra: {
      offset: 15, blur: 12, opacity: 22 },
    penumbra: {
      offset: 19, blur: 38, opacity: 30 }
  },
}
