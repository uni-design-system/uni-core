export interface Shadow {
  opacity: number;
  offset: number; // Y-axis (positive numbers shift down)
  blur: number;
  spread: number;
}

export interface ShadowDefinition {
  umbra: Shadow;
  penumbra: Shadow;
  ambient: Shadow;
}
