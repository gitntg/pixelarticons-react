import React from 'react';

export interface FrameProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Frame = ({size = 24, className = "", ...props}: FrameProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 3h20v18H2V3zm18 16V7H4v12h16z" fill="currentColor"/>
    </svg>
  );
};

Frame.displayName = 'Frame';
