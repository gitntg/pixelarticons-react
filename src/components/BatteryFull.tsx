import React from 'react';

export interface BatteryFullProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BatteryFull = ({size = 24, className = "", ...props}: BatteryFullProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 5H2v14h18v-4h2V9h-2V5h-2zm0 2v10H4V7h14zM8 9H6v6h2V9zm2 0h2v6h-2V9zm6 0h-2v6h2V9z" fill="currentColor"/>
    </svg>
  );
};

BatteryFull.displayName = 'BatteryFull';
