import React from 'react';

export interface VolumePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const VolumePlus = ({size = 24, className = "", ...props}: VolumePlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 2h2v20h-2v-2H8v-2h2V6H8V4h2V2zM6 8V6h2v2H6zm0 8H2V8h4v2H4v4h2v2zm0 0v2h2v-2H6zm13-5h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z" fill="currentColor"/>
    </svg>
  );
};

VolumePlus.displayName = 'VolumePlus';
