import React from 'react';

export interface SubtitlesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Subtitles = ({size = 24, className = "", ...props}: SubtitlesProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M21 7h-8v10h8v-2h-6V9h6V7zM3 15V7h8v2H5v6h6v2H3v-2z" fill="currentColor"/>
    </svg>
  );
};

Subtitles.displayName = 'Subtitles';
