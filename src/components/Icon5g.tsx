import React from 'react';

export interface Icon5gProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Icon5g = ({size = 24, className = "", ...props}: Icon5gProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 7H3v6h5v2H3v2h7v-6H5V9h5V7zm11 0h-9v10h9v-6h-4v2h2v2h-5V9h7V7z" fill="currentColor"/>
    </svg>
  );
};

Icon5g.displayName = 'Icon5g';
