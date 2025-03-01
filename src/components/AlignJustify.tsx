import React from 'react';

export interface AlignJustifyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AlignJustify = ({size = 24, className = "", ...props}: AlignJustifyProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 5H4v2h16V5zm0 4H4v2h16V9zM4 13h16v2H4v-2zm16 4H4v2h16v-2z" fill="currentColor"/>
    </svg>
  );
};

AlignJustify.displayName = 'AlignJustify';
