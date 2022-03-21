import { ShadowDefinition } from './shadow.model';
import { ShadowElevation } from './shadow.types';

export const ShadowCssMap: Record<ShadowElevation, string> = {
  flat: 'none',
  pressed: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  raised: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  focussed: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  navigation: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  modal: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
}

// https://material.io/archive/guidelines/resources/shadows.html#shadows-sketch
export const ShadowMap: Record<ShadowElevation, ShadowDefinition> = {
  flat: {
    umbra: {
      opacity: 14,
      offset: 0,
      blur: 2,
      spread: 0
    },
    penumbra: {
      opacity: 12,
      offset: 2,
      blur: 2,
      spread: 0
    },
    ambient: {
      opacity: 20,
      offset: 1,
      blur: 3,
      spread: 0
    }
  },
  pressed: {
    umbra: {
      opacity: 14,
      offset: 0,
      blur: 4,
      spread: 0
    },
    penumbra: {
      opacity: 12,
      offset: 3,
      blur: 4,
      spread: 0
    },
    ambient: {
      opacity: 20,
      offset: 1,
      blur: 5,
      spread: 0
    }
  },
  raised: {
    umbra: {
      opacity: 14,
      offset: 3,
      blur: 3,
      spread: 0
    },
    penumbra: {
      opacity: 12,
      offset: 3,
      blur: 4,
      spread: 0
    },
    ambient: {
      opacity: 20,
      offset: 1,
      blur: 8,
      spread: 0
    }
  },
  focussed: {
    umbra: {
      opacity: 14,
      offset: 2,
      blur: 4,
      spread: 0
    },
    penumbra: {
      opacity: 12,
      offset: 4,
      blur: 5,
      spread: 0
    },
    ambient: {
      opacity: 20,
      offset: 1,
      blur: 10,
      spread: 0
    }
  },
  navigation: {
    umbra: {
      opacity: 14,
      offset: 6,
      blur: 10,
      spread: 0
    },
    penumbra: {
      opacity: 12,
      offset: 1,
      blur: 18,
      spread: 0
    },
    ambient: {
      opacity: 20,
      offset: 3,
      blur: 5,
      spread: 0
    }
  },
  modal: {
    umbra: {
      opacity: 14,
      offset: 16,
      blur: 24,
      spread: 2
    },
    penumbra: {
      opacity: 12,
      offset: 6,
      blur: 30,
      spread: 5
    },
    ambient: {
      opacity: 20,
      offset: 8,
      blur: 10,
      spread: 0
    }
  },
}
