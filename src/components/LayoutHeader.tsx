import React from 'react';

export interface LayoutHeaderProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutHeader = ({size = 24, className = "", ...props}: LayoutHeaderProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 19h20V5H2v14zm2-2v-6h16v6H4zm16-8H4V7h16v2z" fill="currentColor"/>
    </svg>
  );
};

LayoutHeader.displayName = 'LayoutHeader';
