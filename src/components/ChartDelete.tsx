import React from 'react';

export interface ChartDeleteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ChartDelete = ({size = 24, className = "", ...props}: ChartDeleteProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M13 3H3v18h18V11h-2v8H5V5h8V3zm-6 8h2v6H7v-6zm6-4h-2v10h2V7zm2 6h2v4h-2v-4zm2-6h-2v2h2V7zm0-2V3h-2v2h2zm2 0h-2v2h2v2h2V7h-2V5zm0 0V3h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

ChartDelete.displayName = 'ChartDelete';
