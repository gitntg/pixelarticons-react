import React from 'react';

export interface ZoomOutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ZoomOut = ({size = 24, className = "", ...props}: ZoomOutProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M14 2H6v2H4v2H2v8h2v2h2v2h8v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h2V6h-2V4h-2V2zm0 2v2h2v8h-2v2H6v-2H4V6h2V4h8zm0 5v2H6V9h8z" fill="currentColor"/>
    </svg>
  );
};

ZoomOut.displayName = 'ZoomOut';
