import React from 'react';

export interface MinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Minus = ({size = 24, className = "", ...props}: MinusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path fill="currentColor" d="M4 11h16v2H4z"/>
    </svg>
  );
};

Minus.displayName = 'Minus';
