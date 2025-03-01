import React from 'react';

export interface LayoutRowsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutRows = ({size = 24, className = "", ...props}: LayoutRowsProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 5h20v14H2V5zm2 2v4h16V7H4zm16 6H4v4h16v-4z" fill="currentColor"/>
    </svg>
  );
};

LayoutRows.displayName = 'LayoutRows';
