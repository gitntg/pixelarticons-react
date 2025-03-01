import React from 'react';

export interface DevicesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Devices = ({size = 24, className = "", ...props}: DevicesProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 2h16v6h4v14H12v-6H2V2zm14 6V4H4v10h8V8h4zm-6-2H6v2h4V6zm10 14V10h-6v10h6zm-4-4h2v2h-2v-2zM6 10h4v2H6v-2z" fill="currentColor"/>
    </svg>
  );
};

Devices.displayName = 'Devices';
