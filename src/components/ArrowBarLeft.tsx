import React from 'react';

export interface ArrowBarLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArrowBarLeft = ({size = 24, className = "", ...props}: ArrowBarLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 4v16H4V4h2zm14 7v2h-8v2h-2v-2H8v-2h2V9h2v2h8zm-8-2V7h2v2h-2zm0 6h2v2h-2v-2z" fill="currentColor"/>
    </svg>
  );
};

ArrowBarLeft.displayName = 'ArrowBarLeft';
