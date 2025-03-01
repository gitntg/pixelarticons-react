import React from 'react';

export interface PrintProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Print = ({size = 24, className = "", ...props}: PrintProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 2h12v6h4v10h-4v4H6v-4H2V8h4V2zm2 6h8V4H8v4zm-2 8v-4h12v4h2v-6H4v6h2zm2-2v6h8v-6H8z" fill="currentColor"/>
    </svg>
  );
};

Print.displayName = 'Print';
