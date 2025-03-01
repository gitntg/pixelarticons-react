import React from 'react';

export interface ImageProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Image = ({size = 24, className = "", ...props}: ImageProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 3H2v18h20V3H4zm16 2v14H4V5h16zm-6 4h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2V9zM8 7H6v2h2V7z" fill="currentColor"/>
    </svg>
  );
};

Image.displayName = 'Image';
