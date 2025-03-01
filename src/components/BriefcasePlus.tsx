import React from 'react';

export interface BriefcasePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BriefcasePlus = ({size = 24, className = "", ...props}: BriefcasePlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 3h8v4h6v4h-2V9H4v10h8v2H2V7h6V3zm2 4h4V5h-4v2zm7 14h2v-3h3v-2h-3v-3h-2v3h-3v2h3v3z" fill="currentColor"/>
    </svg>
  );
};

BriefcasePlus.displayName = 'BriefcasePlus';
