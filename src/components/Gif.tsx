import React from 'react';

export interface GifProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Gif = ({size = 24, className = "", ...props}: GifProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 7h6v2H3v6h4v-2H5v-2h4v6H1V7h2zm14 0h6v2h-6v2h4v2h-4v4h-2V7h2zm-4 0h-2v10h2V7z" fill="currentColor"/>
    </svg>
  );
};

Gif.displayName = 'Gif';
