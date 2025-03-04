import React from 'react';

export interface ImageNewProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ImageNew = ({size = 24, className = "", ...props}: ImageNewProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 0h12v2H6V0zM4 3H2v18h20V3H4zm16 2v14H4V5h16zm-6 4h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2V9zM8 7H6v2h2V7zm10 17v-2H6v2h12z" fill="currentColor"/>
    </svg>
  );
};

ImageNew.displayName = 'ImageNew';
