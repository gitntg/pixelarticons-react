import React from 'react';

export interface ImagePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ImagePlus = ({size = 24, className = "", ...props}: ImagePlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 3h10v2H4v14h16v-8h2v10H2V3h2zm10 6h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2V9zM8 7H6v2h2V7zm10-4h2v2h2v2h-2v2h-2V7h-2V5h2V3z" fill="currentColor"/>
    </svg>
  );
};

ImagePlus.displayName = 'ImagePlus';
