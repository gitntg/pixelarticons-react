import React from 'react';

export interface TruckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Truck = ({size = 24, className = "", ...props}: TruckProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 4h14v4h4v2h-4v6h6v-4h2v6h-4v2h-4v-2H8v2H4v-2H0V4h2zm20 8h-2v-2h2v2zm-8-2V6H2v10h12v-6z" fill="currentColor"/>
    </svg>
  );
};

Truck.displayName = 'Truck';
