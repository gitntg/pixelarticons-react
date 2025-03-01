import React from 'react';

export interface ArrowBarRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArrowBarRight = ({size = 24, className = "", ...props}: ArrowBarRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 4v16h2V4h-2zM4 11v2h8v2h-2v2h2v-2h2v-2h2v-2h-2V9h-2V7h-2v2h2v2H4z" fill="currentColor"/>
    </svg>
  );
};

ArrowBarRight.displayName = 'ArrowBarRight';
