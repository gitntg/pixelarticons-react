import React from 'react';

export interface ScrollVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ScrollVertical = ({size = 24, className = "", ...props}: ScrollVerticalProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 2h2v20H2V2zm9 18h2v-2h2v-2h2v-2h-2v2h-2V8h2v2h2V8h-2V6h-2V4h-2v2H9v2H7v2h2V8h2v8H9v-2H7v2h2v2h2v2zM22 2h-2v20h2V2z" fill="currentColor"/>
    </svg>
  );
};

ScrollVertical.displayName = 'ScrollVertical';
