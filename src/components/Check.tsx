import React from 'react';

export interface CheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Check = ({size = 24, className = "", ...props}: CheckProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 6h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm-2 2h2v-2h-2v2zm-2 2h2v-2h-2v2zm-2 0v2h2v-2H8zm-2-2h2v2H6v-2zm0 0H4v-2h2v2z" fill="currentColor"/>
    </svg>
  );
};

Check.displayName = 'Check';
