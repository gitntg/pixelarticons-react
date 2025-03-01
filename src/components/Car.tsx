import React from 'react';

export interface CarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Car = ({size = 24, className = "", ...props}: CarProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 4H7v2H5v2H3v12h4v-2h10v2h4V8h-2V6h-2V4zm0 2v2h2v2H5V8h2V6h10zm2 10H5v-4h14v4zm-2-3h-2v2h2v-2zM7 13h2v2H7v-2z" fill="currentColor"/>
    </svg>
  );
};

Car.displayName = 'Car';
