import React from 'react';

export interface PlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Play = ({size = 24, className = "", ...props}: PlayProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 20H8V4h2v2h2v3h2v2h2v2h-2v2h-2v3h-2v2z" fill="currentColor"/>
    </svg>
  );
};

Play.displayName = 'Play';
