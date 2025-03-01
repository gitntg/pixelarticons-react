import React from 'react';

export interface CropProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Crop = ({size = 24, className = "", ...props}: CropProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 2H6v4H2v2h14v14h2v-4h4v-2h-4V6H8V2zm0 8H6v8h8v-2H8v-6z" fill="currentColor"/>
    </svg>
  );
};

Crop.displayName = 'Crop';
