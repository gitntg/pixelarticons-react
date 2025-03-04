import React from 'react';

export interface SlidersProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Sliders = ({size = 24, className = "", ...props}: SlidersProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 4h2v10h-2V4zm0 12h-2v2h2v2h2v-2h2v-2h-4zm-4-6h-2v10h2V10zm-8 2H3v2h2v6h2v-6h2v-2H5zm8-8h-2v2H9v2h6V6h-2V4zM5 4h2v6H5V4z" fill="currentColor"/>
    </svg>
  );
};

Sliders.displayName = 'Sliders';
