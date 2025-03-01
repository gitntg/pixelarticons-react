import React from 'react';

export interface ArrowUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArrowUp = ({size = 24, className = "", ...props}: ArrowUpProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 20h2V8h2V6h-2V4h-2v2H9v2h2v12zM7 10V8h2v2H7zm0 0v2H5v-2h2zm10 0V8h-2v2h2zm0 0v2h2v-2h-2z" fill="currentColor"/>
    </svg>
  );
};

ArrowUp.displayName = 'ArrowUp';
