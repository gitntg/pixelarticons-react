import React from 'react';

export interface HdProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Hd = ({size = 24, className = "", ...props}: HdProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 7h2v4h4V7h2v10H9v-4H5v4H3V7zm10 8V7h6v2h-4v6h4v2h-6v-2zm6 0V9h2v6h-2z" fill="currentColor"/>
    </svg>
  );
};

Hd.displayName = 'Hd';
