import React from 'react';

export interface DeviceWatchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DeviceWatch = ({size = 24, className = "", ...props}: DeviceWatchProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 2h8v4h5v12h-5v4H8v-4H3V6h5V2zM5 16h14V8H5v8zm6-6h2v2h2v2h-4v-4z" fill="currentColor"/>
    </svg>
  );
};

DeviceWatch.displayName = 'DeviceWatch';
