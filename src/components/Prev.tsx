import React from 'react';

export interface PrevProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Prev = ({size = 24, className = "", ...props}: PrevProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 4h2v16H6V4zm12 0h-2v2h-2v3h-2v2h-2v2h2v3h2v2h2v2h2V4z" fill="currentColor"/>
    </svg>
  );
};

Prev.displayName = 'Prev';
