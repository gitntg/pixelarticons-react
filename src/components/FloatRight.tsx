import React from 'react';

export interface FloatRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FloatRight = ({size = 24, className = "", ...props}: FloatRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 4h6v8h-8V4h2zm4 6V6h-4v4h4zm-8-4H2v2h10V6zm0 4H2v2h10v-2zm10 4v2H2v-2h20zm0 6v-2H2v2h20z" fill="currentColor"/>
    </svg>
  );
};

FloatRight.displayName = 'FloatRight';
