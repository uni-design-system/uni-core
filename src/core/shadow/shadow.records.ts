import { ShadowDefinition } from './shadow.model';
import { ShadowElevation } from './shadow.types';

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
  drawer: {
    umbra: {
      opacity: 14,
      offset: 9,
      blur: 12,
      spread: 1
    },
    penumbra: {
      opacity: 12,
      offset: 3,
      blur: 16,
      spread: 2
    },
    ambient: {
      opacity: 20,
      offset: 5,
      blur: 6,
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
