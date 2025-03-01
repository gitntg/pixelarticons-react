import React from 'react';

export interface DownasaurProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Downasaur = ({size = 24, className = "", ...props}: DownasaurProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2V4zm2 6h2V8H8v2z" fill="currentColor"/>
    </svg>
  );
};

Downasaur.displayName = 'Downasaur';
