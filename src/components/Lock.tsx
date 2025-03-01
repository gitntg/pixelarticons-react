import React from 'react';

export interface LockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Lock = ({size = 24, className = "", ...props}: LockProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M15 2H9v2H7v4H4v14h16V8h-3V4h-2V2zm0 2v4H9V4h6zm-6 6h9v10H6V10h3zm4 3h-2v4h2v-4z" fill="currentColor"/>
    </svg>
  );
};

Lock.displayName = 'Lock';
