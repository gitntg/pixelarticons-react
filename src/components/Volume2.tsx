import React from 'react';

export interface Volume2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Volume2 = ({size = 24, className = "", ...props}: Volume2Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 2h2v20h-2v-2H9v-2h2V6H9V4h2V2zM7 8V6h2v2H7zm0 8H3V8h4v2H5v4h2v2zm0 0v2h2v-2H7zm10-6h-2v4h2v-4zm2-2h2v8h-2V8zm0 8v2h-4v-2h4zm0-10v2h-4V6h4z" fill="currentColor"/>
    </svg>
  );
};

Volume2.displayName = 'Volume2';
