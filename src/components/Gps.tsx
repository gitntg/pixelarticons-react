import React from 'react';

export interface GpsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Gps = ({size = 24, className = "", ...props}: GpsProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M13 2v4h5v5h4v2h-4v5h-5v4h-2v-4H6v-5H2v-2h4V6h5V2h2zM8 8v8h8V8H8zm2 2h4v4h-4v-4z" fill="currentColor"/>
    </svg>
  );
};

Gps.displayName = 'Gps';
