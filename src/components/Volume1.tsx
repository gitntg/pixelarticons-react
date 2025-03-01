import React from 'react';

export interface Volume1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Volume1 = ({size = 24, className = "", ...props}: Volume1Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M15 2h-2v2h-2v2H9v2H5v8h4v2h2v2h2v2h2V2zm-4 16v-2H9v-2H7v-4h2V8h2V6h2v12h-2zm6-8h2v4h-2v-4z" fill="currentColor"/>
    </svg>
  );
};

Volume1.displayName = 'Volume1';
