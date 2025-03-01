import React from 'react';

export interface Icon4gProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Icon4g = ({size = 24, className = "", ...props}: Icon4gProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 7H3v6h5v4h2V7H8v4H5V7zm16 0h-9v10h9v-6h-4v2h2v2h-5V9h7V7z" fill="currentColor"/>
    </svg>
  );
};

Icon4g.displayName = 'Icon4g';
