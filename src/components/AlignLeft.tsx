import React from 'react';

export interface AlignLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AlignLeft = ({size = 24, className = "", ...props}: AlignLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 5H4v2h16V5zm-8 4H4v2h8V9zm8 4v2H4v-2h16zm-8 4H4v2h8v-2z" fill="currentColor"/>
    </svg>
  );
};

AlignLeft.displayName = 'AlignLeft';
