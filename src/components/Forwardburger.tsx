import React from 'react';

export interface ForwardburgerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Forwardburger = ({size = 24, className = "", ...props}: ForwardburgerProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M13 7H3v2h10V7zm8 4h-2V9h-2V7h-2v2h2v2H3v2h14v2h-2v2h2v-2h2v-2h2v-2zM3 15h10v2H3v-2z" fill="currentColor"/>
    </svg>
  );
};

Forwardburger.displayName = 'Forwardburger';
