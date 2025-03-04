import React from 'react';

export interface PercentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Percent = ({size = 24, className = "", ...props}: PercentProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 4h-2v2h-2v2h-2v2h-2v2h-2v2H8v2H6v2H4v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V8h2V6h2V4zm-4 10h4v6h-6v-6h2zm2 4v-2h-2v2h2zM6 4h4v6H4V4h2zm2 4V6H6v2h2z" fill="currentColor"/>
    </svg>
  );
};

Percent.displayName = 'Percent';
