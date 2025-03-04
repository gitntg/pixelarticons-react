import React from 'react';

export interface FrameAddProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FrameAdd = ({size = 24, className = "", ...props}: FrameAddProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 3h20v18H2V3zm18 16V7H4v12h16zm-7-7h3v2h-3v3h-2v-3H8v-2h3V9h2v3z" fill="currentColor"/>
    </svg>
  );
};

FrameAdd.displayName = 'FrameAdd';
