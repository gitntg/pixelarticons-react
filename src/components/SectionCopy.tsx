import React from 'react';

export interface SectionCopyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const SectionCopy = ({size = 24, className = "", ...props}: SectionCopyProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3H3v2h2V3zm2 4h2v2H7V7zm4 0h2v2h-2V7zm2 12h-2v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2zM7 11h2v2H7v-2zm14 0h-2v2h2v-2zm-2 4h2v2h-2v-2zM7 19h2v2H7v-2zM19 7h2v2h-2V7zM7 3h2v2H7V3zm2 12H7v2h2v-2zM3 7h2v2H3V7zm14 0h-2v2h2V7zM3 11h2v2H3v-2zm2 4H3v2h2v-2zm6-12h2v2h-2V3zm6 0h-2v2h2V3z" fill="currentColor"/>
    </svg>
  );
};

SectionCopy.displayName = 'SectionCopy';
