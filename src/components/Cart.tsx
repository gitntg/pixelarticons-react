import React from 'react';

export interface CartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Cart = ({size = 24, className = "", ...props}: CartProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 2h4v4h16v11H4V4H2V2zm4 13h14V8H6v7zm0 4h3v3H6v-3zm14 0h-3v3h3v-3z" fill="currentColor"/>
    </svg>
  );
};

Cart.displayName = 'Cart';
