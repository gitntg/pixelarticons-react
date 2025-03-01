import React from 'react';

export interface DeviceTvProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DeviceTv = ({size = 24, className = "", ...props}: DeviceTvProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 20h20V6h-7V4h-2v2h-2V4H9v2H2v14zM9 4V2H7v2h2zm6 0h2V2h-2v2zm5 4v10H4V8h16z" fill="currentColor"/>
    </svg>
  );
};

DeviceTv.displayName = 'DeviceTv';
