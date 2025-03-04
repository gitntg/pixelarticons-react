import React from 'react';

export interface PixelarticonsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Pixelarticons = ({size = 24, className = "", ...props}: PixelarticonsProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3v18h18V3H3zm16 2v14H5V5h14zM7 7h6v6H9v2H7V7zm8 6h-2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2zM9 9v2h2V9H9z" fill="currentColor"/>
    </svg>
  );
};

Pixelarticons.displayName = 'Pixelarticons';
