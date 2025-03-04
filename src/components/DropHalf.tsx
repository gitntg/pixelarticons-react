import React from 'react';

export interface DropHalfProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DropHalf = ({size = 24, className = "", ...props}: DropHalfProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M13 2h-2v2H9v4H7v4H5v6h2v2h2v2h6v-2h2v-2h2v-6h-2V8h-2V4h-2V2zm0 2v4h2v4h2v3H7v-3h2V8h2V4h2z" fill="currentColor"/>
    </svg>
  );
};

DropHalf.displayName = 'DropHalf';
