export interface Shadow {
  offset: number; // Y-axis (positive numbers shift down)
  blur: number;
  opacity: number;
}

export interface ShadowDefinition {
  umbra: Shadow;
  penumbra: Shadow;
}
