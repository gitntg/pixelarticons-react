import React from 'react';

export interface ChartAddProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ChartAdd = ({size = 24, className = "", ...props}: ChartAddProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h10v2H5v14h14v-8h2v10H3V3zm6 8H7v6h2v-6zm2-4h2v10h-2V7zm6 6h-2v4h2v-4zm0-10h2v2h2v2h-2v2h-2V7h-2V5h2V3z" fill="currentColor"/>
    </svg>
  );
};

ChartAdd.displayName = 'ChartAdd';
