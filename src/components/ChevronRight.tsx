import React from 'react';

export interface ChevronRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ChevronRight = ({size = 24, className = "", ...props}: ChevronRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 5v2h2V5H8zm4 4V7h-2v2h2zm2 2V9h-2v2h2zm0 2h2v-2h-2v2zm-2 2v-2h2v2h-2zm0 0h-2v2h2v-2zm-4 4v-2h2v2H8z" fill="currentColor"/>
    </svg>
  );
};

ChevronRight.displayName = 'ChevronRight';
