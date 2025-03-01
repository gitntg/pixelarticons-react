import React from 'react';

export interface CornerLeftDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CornerLeftDown = ({size = 24, className = "", ...props}: CornerLeftDownProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 6v10H6v2h2v2h2v-2h2v-2h-2V6h10V4H8v2zm4 10h2v-2h-2v2zm-6 0H4v-2h2v2z" fill="currentColor"/>
    </svg>
  );
};

CornerLeftDown.displayName = 'CornerLeftDown';
