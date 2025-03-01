import React from 'react';

export interface DollarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Dollar = ({size = 24, className = "", ...props}: DollarProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 2h2v4h6v2H7v3H5V6h6V2zM5 18h6v4h2v-4h6v-2H5v2zm14-7H5v2h12v3h2v-5z" fill="currentColor"/>
    </svg>
  );
};

Dollar.displayName = 'Dollar';
