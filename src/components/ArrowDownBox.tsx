import React from 'react';

export interface ArrowDownBoxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArrowDownBox = ({size = 24, className = "", ...props}: ArrowDownBoxProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM11 7h2v6h2v2h-2v2h-2v-2H9v-2h2V7zm-2 4v2H7v-2h2zm8 0h-2v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

ArrowDownBox.displayName = 'ArrowDownBox';
