import React from 'react';

export interface FloatLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FloatLeft = ({size = 24, className = "", ...props}: FloatLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4h6v8H2V4h2zm4 6V6H4v4h4zm14-4H12v2h10V6zm0 4H12v2h10v-2zm0 4v2H2v-2h20zm0 6v-2H2v2h20z" fill="currentColor"/>
    </svg>
  );
};

FloatLeft.displayName = 'FloatLeft';
