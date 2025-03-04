import React from 'react';

export interface ImageFlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ImageFlash = ({size = 24, className = "", ...props}: ImageFlashProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 0h2v4h4v2h-2v2h-2v2h-2V6h-4V4h2V2h2V0zM4 3h8v2H4v14h16v-7h2v9H2V3h2zm10 6h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2V9zM8 7H6v2h2V7z" fill="currentColor"/>
    </svg>
  );
};

ImageFlash.displayName = 'ImageFlash';
