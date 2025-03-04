import React from 'react';

export interface FillHalfProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FillHalf = ({size = 24, className = "", ...props}: FillHalfProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M9 2h2v2H9V2zm4 4V4h-2v2H9v2H7v2H5v2H3v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v6h2V12h-2v-2h-2V8h-2V6h-2zm0 0v2h2v2h2v2h2v2H5v-2h2v-2h2V8h2V6h2z" fill="currentColor"/>
    </svg>
  );
};

FillHalf.displayName = 'FillHalf';
