import React from 'react';

export interface InvertProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Invert = ({size = 24, className = "", ...props}: InvertProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h18v18H3V3zm16 4h-2v2h-2v2h-2v2h-2v2H9v2H7v2h12V7z" fill="currentColor"/>
    </svg>
  );
};

Invert.displayName = 'Invert';
