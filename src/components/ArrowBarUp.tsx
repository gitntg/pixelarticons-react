import React from 'react';

export interface ArrowBarUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArrowBarUp = ({size = 24, className = "", ...props}: ArrowBarUpProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 6h16V4H4v2zm7 14h2v-8h2v2h2v-2h-2v-2h-2V8h-2v2H9v2H7v2h2v-2h2v8z" fill="currentColor"/>
    </svg>
  );
};

ArrowBarUp.displayName = 'ArrowBarUp';
