import React from 'react';

export interface ChartProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Chart = ({size = 24, className = "", ...props}: ChartProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zM9 11H7v6h2v-6zm2-4h2v10h-2V7zm6 6h-2v4h2v-4z" fill="currentColor"/>
    </svg>
  );
};

Chart.displayName = 'Chart';
