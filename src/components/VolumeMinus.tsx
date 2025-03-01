import React from 'react';

export interface VolumeMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const VolumeMinus = ({size = 24, className = "", ...props}: VolumeMinusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M12 2h-2v2H8v2H6v2H2v8h4v2h2v2h2v2h2V2zM8 18v-2H6v-2H4v-4h2V8h2V6h2v12H8zm14-7h-8v2h8v-2z" fill="currentColor"/>
    </svg>
  );
};

VolumeMinus.displayName = 'VolumeMinus';
