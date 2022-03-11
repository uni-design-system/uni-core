import React, { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {

  return (
    <div>
      {children}
    </div>
  )
}
