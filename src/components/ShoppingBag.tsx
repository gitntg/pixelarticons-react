import React from 'react';

export interface ShoppingBagProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ShoppingBag = ({size = 24, className = "", ...props}: ShoppingBagProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M9 2h6v2H9V2zm6 4V4h2v2h4v16H3V6h4V4h2v2h6zm0 2H9v2H7V8H5v12h14V8h-2v2h-2V8z" fill="currentColor"/>
    </svg>
  );
};

ShoppingBag.displayName = 'ShoppingBag';
