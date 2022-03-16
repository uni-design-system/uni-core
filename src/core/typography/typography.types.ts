
export type classes = 'sanserif' | 'serif' | 'slab' | 'script' | 'display' | 'monospace';

export type families = 'Open-Sans' | 'Times-New-Roman' | 'Noto-Serif-Display';

export type FontWeight =
  | 'thin' // Hairline
  | 'extra-light' // Ultra Light
  | 'light'
  | 'normal' // Regular
  | 'medium'
  | 'semi-bold' // Demi Bold)
  | 'bold' // Ultra Bold
  | 'extra-bold'
  | 'black' // Heavy
  | 'extra-black' // Ultra Black
  | number // 100, 200, 300, ..., 900
  ;

export type placement = 'overline' | 'title' | 'underline' | 'body' | 'label' | 'note' | 'footer';

export type TextRole =
  | 'headline-1'
  | 'headline-2'
  | 'headline-3'
  | 'headline-4'
  | 'headline-5'
  | 'headline-6'
  | 'body-1-long'
  | 'body-1-short'
  | 'body-2-long'
  | 'body-2-short'
  | 'title'
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
