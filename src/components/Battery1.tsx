import React from 'react';

export interface Battery1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Battery1 = ({size = 24, className = "", ...props}: Battery1Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 5H2v14h18v-4h2V9h-2V5H4zm14 2v10H4V7h14zM8 9H6v6h2V9z" fill="currentColor"/>
    </svg>
  );
};

Battery1.displayName = 'Battery1';
