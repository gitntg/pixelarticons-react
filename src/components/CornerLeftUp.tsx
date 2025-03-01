import React from 'react';

export interface CornerLeftUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CornerLeftUp = ({size = 24, className = "", ...props}: CornerLeftUpProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 18V8H6V6h2V4h2v2h2v2h-2v10h10v2H8v-2zm4-10h2v2h-2V8zM6 8H4v2h2V8z" fill="currentColor"/>
    </svg>
  );
};

CornerLeftUp.displayName = 'CornerLeftUp';
