import React from 'react';

export interface VolumeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Volume = ({size = 24, className = "", ...props}: VolumeProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M15 2h2v20h-2v-2h-2v-2h2V6h-2V4h2V2zm-4 6V6h2v2h-2zm-2 2h2V8H7v8h4v2h2v-2h-2v-2H9v-4z" fill="currentColor"/>
    </svg>
  );
};

Volume.displayName = 'Volume';
