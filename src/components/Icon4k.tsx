import React from 'react';

export interface Icon4kProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Icon4k = ({size = 24, className = "", ...props}: Icon4kProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 7h2v4h4V7h2v10H9v-4H3V7zm10 0h2v4h2v2h-2v4h-2V7zm6 8h-2v-2h2v2zm0 0h2v2h-2v-2zm0-6h-2v2h2V9zm0 0V7h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

Icon4k.displayName = 'Icon4k';
