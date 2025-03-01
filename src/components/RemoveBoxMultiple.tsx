import React from 'react';

export interface RemoveBoxMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const RemoveBoxMultiple = ({size = 24, className = "", ...props}: RemoveBoxMultipleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3H3v14h14V3H5zm10 2v10H5V5h10zm4 2v12H7v2h14V7h-2zm-6 2H7v2h6V9z" fill="currentColor"/>
    </svg>
  );
};

RemoveBoxMultiple.displayName = 'RemoveBoxMultiple';
