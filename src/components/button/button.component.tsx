import React, { ReactNode } from 'react';
import useTheme from '../../core/theme/theme.hook';

export interface ButtonProps {
  children: ReactNode,
  disabled?: boolean
}

export function Button({ children, disabled = false }: ButtonProps): JSX.Element {

  const theme = useTheme();

  return (
    <button disabled={disabled}>
      {children} {theme.name}
    </button>
  )
}
