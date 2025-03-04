import React from 'react';

export interface MembercardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Membercard = ({size = 24, className = "", ...props}: MembercardProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 3h20v14h-7v3h-2v-2h-2v2H9v-3H2V3zm2 2v4h16V5H4zm16 8H4v2h16v-2z" fill="currentColor"/>
    </svg>
  );
};

Membercard.displayName = 'Membercard';
