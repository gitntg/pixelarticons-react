import React from 'react';

export interface AnalyticsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Analytics = ({size = 24, className = "", ...props}: AnalyticsProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h18v18H3V3zm16 2H5v14h14V5zM7 12h2v5H7v-5zm10-5h-2v10h2V7zm-6 3h2v2h-2v-2zm2 4h-2v3h2v-3z" fill="currentColor"/>
    </svg>
  );
};

Analytics.displayName = 'Analytics';
