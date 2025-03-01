import React from 'react';

export interface ArrowsVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArrowsVertical = ({size = 24, className = "", ...props}: ArrowsVerticalProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 11h2V7h2v2h2V7h-2V5h-2V3h-2v2H9v2H7v2h2V7h2v4zm0 2h2v4h2v2h-2v2h-2v-2H9v-2h2v-4zm-2 4v-2H7v2h2zm6 0v-2h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

ArrowsVertical.displayName = 'ArrowsVertical';
