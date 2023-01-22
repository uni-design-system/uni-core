import { ShadowDefinition } from './shadow.model';
import { ShadowElevation } from './shadow.types';
import { GetBoxShadows } from './shadow.utils';

export const ShadowMap: Record<ShadowElevation, ShadowDefinition> = {
  pressed: {
    umbra: {
      offset: 1,
      blur: 2,
      opacity: 24,
    },
    penumbra: {
      offset: 1,
      blur: 3,
      opacity: 12,
    },
  },
  raised: {
    umbra: {
      offset: 3,
      blur: 6,
      opacity: 23,
    },
    penumbra: {
      offset: 3,
      blur: 6,
      opacity: 16,
    },
  },
  focussed: {
    umbra: {
      offset: 6,
      blur: 6,
      opacity: 23,
    },
    penumbra: {
      offset: 10,
      blur: 20,
      opacity: 19,
    },
  },
  navigation: {
    umbra: {
      offset: 10,
      blur: 10,
      opacity: 22,
    },
    penumbra: {
      offset: 14,
      blur: 28,
      opacity: 25,
    },
  },
  modal: {
    umbra: {
      offset: 15,
      blur: 12,
      opacity: 22,
    },
    penumbra: {
      offset: 19,
      blur: 38,
      opacity: 30,
    },
  },
};

export const ShadowCssMap: Record<ShadowElevation, string> = {
  pressed: GetBoxShadows(ShadowMap['pressed']),
  raised: GetBoxShadows(ShadowMap['raised']),
  focussed: GetBoxShadows(ShadowMap['focussed']),
  navigation: GetBoxShadows(ShadowMap['navigation']),
  modal: GetBoxShadows(ShadowMap['modal']),
};
