import React from 'react';

export interface BedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Bed = ({size = 24, className = "", ...props}: BedProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M0 4h2v12h10V8h10v2h-8v6h8v-6h2v10h-2v-2H2v2H0V4zm3 5h2v4H3V9zm6 4v2H5v-2h4zm0-4h2v4H9V9zm0 0H5V7h4v2z" fill="currentColor"/>
    </svg>
  );
};

Bed.displayName = 'Bed';
