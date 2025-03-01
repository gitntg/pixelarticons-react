import React from 'react';

export interface FrameCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FrameCheck = ({size = 24, className = "", ...props}: FrameCheckProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 3h20v18H2V3zm18 16V7H4v12h16zm-4-9h-2v2h-2v2h-2v-2H8v2h2v2h2v-2h2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

FrameCheck.displayName = 'FrameCheck';
