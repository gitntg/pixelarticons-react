import React from 'react';

export interface DeskphoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Deskphone = ({size = 24, className = "", ...props}: DeskphoneProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h18v18H3V3zm2 2v6h8V5H5zm10 0v14h4V5h-4zm-2 14v-2h-3v2h3zm-5 0v-2H5v2h3zm-3-4h3v-2H5v2zm5-2v2h3v-2h-3z" fill="currentColor"/>
    </svg>
  );
};

Deskphone.displayName = 'Deskphone';
