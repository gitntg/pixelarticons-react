import React from 'react';

export interface DeviceLaptopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DeviceLaptop = ({size = 24, className = "", ...props}: DeviceLaptopProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 4H4v12h16V4H6zm12 2v8H6V6h12zm4 12H2v2h20v-2z" fill="currentColor"/>
    </svg>
  );
};

DeviceLaptop.displayName = 'DeviceLaptop';
