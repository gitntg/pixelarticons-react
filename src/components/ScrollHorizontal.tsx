import React from 'react';

export interface ScrollHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ScrollHorizontal = ({size = 24, className = "", ...props}: ScrollHorizontalProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M22 2v2H2V2h20zm0 18v2H2v-2h20zm-6-5v-2H8v2H6v-2H4v-2h2V9h2v2h8V9h2v2h2v2h-2v2h-2zm0 0v2h-2v-2h2zm0-6h-2V7h2v2zM8 9V7h2v2H8zm0 6h2v2H8v-2z" fill="currentColor"/>
    </svg>
  );
};

ScrollHorizontal.displayName = 'ScrollHorizontal';
