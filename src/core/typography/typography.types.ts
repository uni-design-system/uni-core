
export type classes = 'sanserif' | 'serif' | 'slab' | 'script' | 'display' | 'monospace';

export type families = 'Open-Sans' | 'Times-New-Roman' | 'Noto-Serif-Display';

export type FontWeight =
  | 'thin' // Hairline
  | 'extra-light' // Ultra Light
  | 'light'
  | 'normal' // Regular
  | 'medium'
  | 'semi-bold' // Demi Bold
  | 'bold' // Ultra Bold
  | 'extra-bold'
  | 'black' // Heavy
  | 'extra-black' // Ultra Black
  | number // 100, 200, 300, ..., 900
  ;

export type placement = 'overline' | 'title' | 'underline' | 'body' | 'label' | 'note' | 'footer';

export type TextRole =
  | 'display-large'
  | 'display-medium'
  | 'display-small'
  | 'headline-large'
  | 'headline-medium'
  | 'headline-small'
  | 'title-large'
  | 'title-medium'
  | 'title-small'
  | 'body-1-long'
  | 'body-1-short'
  | 'body-2-long'
  | 'body-2-short'
  | 'subtitle-1'
  | 'subtitle-2'
  | 'label'
  | 'button'
  | 'caption'
  | 'overline'
  | 'paragraph'
  | 'quote'
  | 'note'
  ;

export type TextDecoration =
  | 'overline'
  | 'line-through'
  | 'underline'
  | 'overline-underline'
  ;

export type TextTransform =
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  ;
