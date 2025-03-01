import React from 'react';

export interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArrowDown = ({size = 24, className = "", ...props}: ArrowDownProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 4h2v12h2v2h-2v2h-2v-2H9v-2h2V4zM7 14v2h2v-2H7zm0 0v-2H5v2h2zm10 0v2h-2v-2h2zm0 0v-2h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

ArrowDown.displayName = 'ArrowDown';
