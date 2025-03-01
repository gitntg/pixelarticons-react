import React from 'react';

export interface AlignCenterProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AlignCenter = ({size = 24, className = "", ...props}: AlignCenterProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 5H4v2h16V5zm-4 4H8v2h8V9zM4 13h16v2H4v-2zm12 4H8v2h8v-2z" fill="currentColor"/>
    </svg>
  );
};

AlignCenter.displayName = 'AlignCenter';
