import React from 'react';

export interface DeviceTabletProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DeviceTablet = ({size = 24, className = "", ...props}: DeviceTabletProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 2H4v20h16V2H6zm12 2v16H6V4h12zm-5 12h-2v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

DeviceTablet.displayName = 'DeviceTablet';
