import React from 'react';

export interface ChartMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ChartMultiple = ({size = 24, className = "", ...props}: ChartMultipleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 2H1v16h18V2H3zm0 2h14v12H3V4zm18 2v14H5v2h18V6h-2zM7 8H5v6h2V8zm2-2h2v8H9V6zm6 4h-2v4h2v-4z" fill="currentColor"/>
    </svg>
  );
};

ChartMultiple.displayName = 'ChartMultiple';
