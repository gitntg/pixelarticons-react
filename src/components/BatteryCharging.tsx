import React from 'react';

export interface BatteryChargingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BatteryCharging = ({size = 24, className = "", ...props}: BatteryChargingProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 5H2v14h6v-2H4V7h4V5H4zm10 0h6v4h2v6h-2v4h-6v-2h4V7h-4V5zm-4 2h2v4h4v2h-2v2h-2v2h-2v-4H6v-2h2V9h2V7z" fill="currentColor"/>
    </svg>
  );
};

BatteryCharging.displayName = 'BatteryCharging';
