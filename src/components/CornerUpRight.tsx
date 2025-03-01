import React from 'react';

export interface CornerUpRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CornerUpRight = ({size = 24, className = "", ...props}: CornerUpRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 8h10V6h2v2h2v2h-2v2h-2v-2H6v10H4V8h2zm10 4v2h-2v-2h2zm0-6V4h-2v2h2z" fill="currentColor"/>
    </svg>
  );
};

CornerUpRight.displayName = 'CornerUpRight';
