import React from 'react';

export interface Battery2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Battery2 = ({size = 24, className = "", ...props}: Battery2Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 5H2v14h18v-4h2V9h-2V5H4zm14 2v10H4V7h14zM6 9h2v6H6V9zm6 0h-2v6h2V9z" fill="currentColor"/>
    </svg>
  );
};

Battery2.displayName = 'Battery2';
