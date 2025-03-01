import React from 'react';

export interface BatteryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Battery = ({size = 24, className = "", ...props}: BatteryProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 5H2v14h18v-4h2V9h-2V5H4zm14 2v10H4V7h14z" fill="currentColor"/>
    </svg>
  );
};

Battery.displayName = 'Battery';
