import React from 'react';

export interface SectionXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SectionX = ({size = 24, className = "", ...props}: SectionXProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3H3v2h2V3zm4 0H7v2h2V3zM7 19h2v2H7v-2zm6 0h-2v2h2v-2zM3 7h2v2H3V7zm18 0h-2v2h2V7zm-2 4h2v2h-2v-2zm2 8h-2v-2h2v-2h-2v2h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2zM3 11h2v2H3v-2zm2 4H3v2h2v-2zm-2 4h2v2H3v-2zM13 3h-2v2h2V3zm2 0h2v2h-2V3zm6 0h-2v2h2V3z" fill="currentColor"/>
    </svg>
  );
};

SectionX.displayName = 'SectionX';
