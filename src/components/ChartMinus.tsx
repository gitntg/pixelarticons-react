import React from 'react';

export interface ChartMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ChartMinus = ({size = 24, className = "", ...props}: ChartMinusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M13 3H3v18h18V11h-2v8H5V5h8V3zm-6 8h2v6H7v-6zm6-4h-2v10h2V7zm2 6h2v4h-2v-4zm6-8h-6v2h6V5z" fill="currentColor"/>
    </svg>
  );
};

ChartMinus.displayName = 'ChartMinus';
