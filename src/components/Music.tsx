import React from 'react';

export interface MusicProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Music = ({size = 24, className = "", ...props}: MusicProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 4h12v16h-8v-8h6V8h-8v12H2v-8h6V4zm0 10H4v4h4v-4zm10 0h-4v4h4v-4z" fill="currentColor"/>
    </svg>
  );
};

Music.displayName = 'Music';
