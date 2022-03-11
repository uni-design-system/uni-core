export type Role =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'ghost'
  | 'error'
  | 'warn'
  | 'link'
  ;

export type SupportRole =
  | 'info'
  | 'warn'
  | 'success'
  | 'error'
  ;

export type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  ;

export type HorizontalBinary =
  | 'left'
  | 'right'
  ;

export type HorizontalAlign = HorizontalBinary
  | 'center'
  ;

export type VerticalBinary =
  | 'top'
  | 'bottom'
  ;

export type VerticalAlign = VerticalBinary
  | 'middle'
  ;

export type Apply =
  | HorizontalBinary
  | VerticalBinary
  | 'vertical'
  | 'horizontal'
  | 'all'
  ;

export type RadiusApply =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'all'
  | 'none'
  ;
