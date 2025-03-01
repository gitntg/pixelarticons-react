import React from 'react';

export interface SpotlightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Spotlight = ({size = 24, className = "", ...props}: SpotlightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 2h16v20H3V2h2zm14 18V4H5v16h14zM13 6H7v2h6V6zm-6 4h10v8H7v-8z" fill="currentColor"/>
    </svg>
  );
};

Spotlight.displayName = 'Spotlight';
