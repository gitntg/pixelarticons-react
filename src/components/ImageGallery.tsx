import React from 'react';

export interface ImageGalleryProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ImageGallery = ({size = 24, className = "", ...props}: ImageGalleryProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 2h20v16h-5v2h-2v-2H9v2H7v-2H2V2zm5 18v2H5v-2h2zm10 0v2h2v-2h-2zm3-16H4v12h16V4zm-8 4h2v2h-2V8zm-2 4v-2h2v2h-2zm0 0v2H8v-2h2zm6 0h-2v-2h2v2zm0 0h2v2h-2v-2zM8 6H6v2h2V6z" fill="currentColor"/>
    </svg>
  );
};

ImageGallery.displayName = 'ImageGallery';
