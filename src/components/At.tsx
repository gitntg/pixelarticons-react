import React from 'react';

export interface AtProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const At = ({size = 24, className = "", ...props}: AtProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4h16v12H8V8h8v6h2V6H6v12h14v2H4V4zm10 10v-4h-4v4h4z" fill="currentColor"/>
    </svg>
  );
};

At.displayName = 'At';
