import React from 'react';

export interface ArrowRightBoxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArrowRightBox = ({size = 24, className = "", ...props}: ArrowRightBoxProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 21V3h18v18H3zM19 5H5v14h14V5zM7 13v-2h6V9h2v2h2v2h-2v2h-2v-2H7zm4 2h2v2h-2v-2zm0-8v2h2V7h-2z" fill="currentColor"/>
    </svg>
  );
};

ArrowRightBox.displayName = 'ArrowRightBox';
