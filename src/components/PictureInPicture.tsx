import React from 'react';

export interface PictureInPictureProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const PictureInPicture = ({size = 24, className = "", ...props}: PictureInPictureProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 4h20v16H2V4zm2 2v12h16V6H4zm6 2h8v6h-8V8zm2 2v2h4v-2h-4z" fill="currentColor"/>
    </svg>
  );
};

PictureInPicture.displayName = 'PictureInPicture';
