import React from 'react';

export interface CastProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Cast = ({size = 24, className = "", ...props}: CastProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 3h18v18h-8v-2h6V5H4v4H2V3h2zm0 16H2v2h2v-2zm-2-4h4v2H2v-2zm8-4H2v2h8v8h2V11h-2zm-4 4h2v6H6v-6z" fill="currentColor"/>
    </svg>
  );
};

Cast.displayName = 'Cast';
