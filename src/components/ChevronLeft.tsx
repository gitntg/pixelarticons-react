import React from 'react';

export interface ChevronLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ChevronLeft = ({size = 24, className = "", ...props}: ChevronLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 5v2h-2V5h2zm-4 4V7h2v2h-2zm-2 2V9h2v2h-2zm0 2H8v-2h2v2zm2 2v-2h-2v2h2zm0 0h2v2h-2v-2zm4 4v-2h-2v2h2z" fill="currentColor"/>
    </svg>
  );
};

ChevronLeft.displayName = 'ChevronLeft';
