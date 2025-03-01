import React from 'react';

export interface CoffeeAltProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CoffeeAlt = ({size = 24, className = "", ...props}: CoffeeAltProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M7 3H5v4h2V3zm4 0H9v4h2V3zm2 0h2v4h-2V3zm8 6H3v12h14v-5h4V9zm-2 5h-2v-3h2v3zM5 11h10v8H5v-8z" fill="currentColor"/>
    </svg>
  );
};

CoffeeAlt.displayName = 'CoffeeAlt';
