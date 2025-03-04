import React from 'react';

export interface CornerDownLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CornerDownLeft = ({size = 24, className = "", ...props}: CornerDownLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 16H8v2H6v-2H4v-2h2v-2h2v2h10V4h2v12h-2zM8 12v-2h2v2H8zm0 6v2h2v-2H8z" fill="currentColor"/>
    </svg>
  );
};

CornerDownLeft.displayName = 'CornerDownLeft';
