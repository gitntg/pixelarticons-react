import React from 'react';

export interface Sliders2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Sliders2 = ({size = 24, className = "", ...props}: Sliders2Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 8h4m0 0V6h4v2M7 8v2h4V8m0 0h10M3 16h10m0 0v-2h4v2m-4 0v2h4v-2m0 0h4" stroke="currentColor" stroke-width="2" stroke-linecap="square"/>
    </svg>
  );
};

Sliders2.displayName = 'Sliders2';
