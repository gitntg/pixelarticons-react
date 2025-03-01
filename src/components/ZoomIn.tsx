import React from 'react';

export interface ZoomInProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ZoomIn = ({size = 24, className = "", ...props}: ZoomInProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M14 2H6v2H4v2H2v8h2v2h2v2h8v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h2V6h-2V4h-2V2zm0 2v2h2v8h-2v2H6v-2H4V6h2V4h8zM9 6h2v3h3v2h-3v3H9v-3H6V9h3V6z" fill="currentColor"/>
    </svg>
  );
};

ZoomIn.displayName = 'ZoomIn';
