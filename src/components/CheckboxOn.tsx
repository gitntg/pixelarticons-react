import React from 'react';

export interface CheckboxOnProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CheckboxOn = ({size = 24, className = "", ...props}: CheckboxOnProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z" fill="currentColor"/>
    </svg>
  );
};

CheckboxOn.displayName = 'CheckboxOn';
