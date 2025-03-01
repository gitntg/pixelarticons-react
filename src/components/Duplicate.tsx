import React from 'react';

export interface DuplicateProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Duplicate = ({size = 24, className = "", ...props}: DuplicateProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3h12v4h4v14H7v-4H3V3h2zm10 4V5H5v10h2V7h8zM9 17v2h10V9H9v8z" fill="currentColor"/>
    </svg>
  );
};

Duplicate.displayName = 'Duplicate';
