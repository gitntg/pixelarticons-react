import React from 'react';

export interface ToggleLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ToggleLeft = ({size = 24, className = "", ...props}: ToggleLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 5h16v2H4V5zm0 12H2V7h2v10zm16 0v2H4v-2h16zm0 0h2V7h-2v10zM10 9H6v6h4V9z" fill="currentColor"/>
    </svg>
  );
};

ToggleLeft.displayName = 'ToggleLeft';
