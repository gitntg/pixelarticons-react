import React from 'react';

export interface ToggleRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ToggleRight = ({size = 24, className = "", ...props}: ToggleRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 5h16v2H4V5zm0 12H2V7h2v10zm16 0v2H4v-2h16zm0 0h2V7h-2v10zm-2-8h-4v6h4V9z" fill="currentColor"/>
    </svg>
  );
};

ToggleRight.displayName = 'ToggleRight';
