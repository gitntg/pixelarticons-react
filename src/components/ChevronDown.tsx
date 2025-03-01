import React from 'react';

export interface ChevronDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ChevronDown = ({size = 24, className = "", ...props}: ChevronDownProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M7 8H5v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2h-2v-2H9v-2H7V8z" fill="currentColor"/>
    </svg>
  );
};

ChevronDown.displayName = 'ChevronDown';
