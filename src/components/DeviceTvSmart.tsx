import React from 'react';

export interface DeviceTvSmartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DeviceTvSmart = ({size = 24, className = "", ...props}: DeviceTvSmartProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4h18v14h-6v2H8v-2H2V4h2zm16 12V6H4v10h16z" fill="currentColor"/>
    </svg>
  );
};

DeviceTvSmart.displayName = 'DeviceTvSmart';
