import React from 'react';

export interface DropFullProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DropFull = ({size = 24, className = "", ...props}: DropFullProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 2h2v2h2v4h2v4h2v6h-2v2h-2v2H9v-2H7v-2H5v-6h2V8h2V4h2V2z" fill="currentColor"/>
    </svg>
  );
};

DropFull.displayName = 'DropFull';
