import React, { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {

  return (
    <div>
      {children}
    </div>
  )
}
