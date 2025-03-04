import React from 'react';

export interface MonitorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Monitor = ({size = 24, className = "", ...props}: MonitorProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 3H2v14h8v2H8v2h8v-2h-2v-2h8V3h-2zm-6 12H4V5h16v10h-6z" fill="currentColor"/>
    </svg>
  );
};

Monitor.displayName = 'Monitor';
