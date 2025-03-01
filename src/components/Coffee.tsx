import React from 'react';

export interface CoffeeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Coffee = ({size = 24, className = "", ...props}: CoffeeProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4h18v7h-4v5H4V4zm14 5h2V6h-2v3zm-2-3H6v8h10V6zm3 14H3v-2h16v2z" fill="currentColor"/>
    </svg>
  );
};

Coffee.displayName = 'Coffee';
