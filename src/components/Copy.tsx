import React from 'react';

export interface CopyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Copy = ({size = 24, className = "", ...props}: CopyProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2h11v2H6v13H4V2zm4 4h12v16H8V6zm2 2v12h8V8h-8z" fill="currentColor"/>
    </svg>
  );
};

Copy.displayName = 'Copy';
