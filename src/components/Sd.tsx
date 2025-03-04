import React from 'react';

export interface SdProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Sd = ({size = 24, className = "", ...props}: SdProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 2h2v20H4V6h2v14h12V4H8V2h10zM8 4H6v2h2V4zm6 2h2v4h-2V6zm-2 0h-2v4h2V6z" fill="currentColor"/>
    </svg>
  );
};

Sd.displayName = 'Sd';
