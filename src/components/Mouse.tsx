import React from 'react';

export interface MouseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Mouse = ({size = 24, className = "", ...props}: MouseProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 3h12v18H6V3zm2 2v4h3V5H8zm5 0v4h3V5h-3zm3 6H8v8h8v-8z" fill="currentColor"/>
    </svg>
  );
};

Mouse.displayName = 'Mouse';
