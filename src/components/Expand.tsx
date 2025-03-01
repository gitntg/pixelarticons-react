import React from 'react';

export interface ExpandProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Expand = ({size = 24, className = "", ...props}: ExpandProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 5h2v2h2v2h2V7h-2V5h-2V3h-2v2zM9 7V5h2v2H9zm0 0v2H7V7h2zm-5 6h16v-2H4v2zm9 6h-2v-2H9v-2H7v2h2v2h2v2h2v-2zm2-2h-2v2h2v-2zm0 0h2v-2h-2v2z" fill="currentColor"/>
    </svg>
  );
};

Expand.displayName = 'Expand';
