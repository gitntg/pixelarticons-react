import React from 'react';

export interface CutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Cut = ({size = 24, className = "", ...props}: CutProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 2h2v2H2V2zm4 4H4V4h2v2zm2 2H6V6h2v2zm2 2V8H8v2h2zm4 0h-4v4H2v8h8v-8h4v8h8v-8h-8v-4zm2-2v2h-2V8h2zm2-2v2h-2V6h2zm2-2h-2v2h2V4zm0 0V2h2v2h-2zM4 20v-4h4v4H4zm12 0v-4h4v4h-4z" fill="currentColor"/>
    </svg>
  );
};

Cut.displayName = 'Cut';
