import React from 'react';

export interface DashboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Dashboard = ({size = 24, className = "", ...props}: DashboardProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h8v10H3V3zm2 2v6h4V5H5zm8-2h8v6h-8V3zm2 2v2h4V5h-4zm-2 6h8v10h-8V11zm2 2v6h4v-6h-4zM3 15h8v6H3v-6zm2 2v2h4v-2H5z" fill="currentColor"/>
    </svg>
  );
};

Dashboard.displayName = 'Dashboard';
