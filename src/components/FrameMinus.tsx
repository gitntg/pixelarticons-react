import React from 'react';

export interface FrameMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FrameMinus = ({size = 24, className = "", ...props}: FrameMinusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 3h20v18H2V3zm18 16V7H4v12h16zM8 12h8v2H8v-2z" fill="currentColor"/>
    </svg>
  );
};

FrameMinus.displayName = 'FrameMinus';
