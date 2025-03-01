import React from 'react';

export interface HqProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Hq = ({size = 24, className = "", ...props}: HqProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 7h2v4h4V7h2v10H9v-4H5v4H3V7zm10 2h2v6h-2V9zm6 6h-4v2h8v-2h-2V9h-2V7h-4v2h4v6z" fill="currentColor"/>
    </svg>
  );
};

Hq.displayName = 'Hq';
