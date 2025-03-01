import React from 'react';

export interface ChevronUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ChevronUp = ({size = 24, className = "", ...props}: ChevronUpProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M7 16H5v-2h2v-2h2v-2h2V8h2v2h2v2h2v2h2v2h-2v-2h-2v-2h-2v-2h-2v2H9v2H7v2z" fill="currentColor"/>
    </svg>
  );
};

ChevronUp.displayName = 'ChevronUp';
