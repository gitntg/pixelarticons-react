import React from 'react';

export interface BriefcaseCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BriefcaseCheck = ({size = 24, className = "", ...props}: BriefcaseCheckProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 3H8v4H2v14h20V7h-6V3zm-2 4h-4V5h4v2zM4 19V9h16v10H4zm10-8h2v2h-2v-2zm-2 4v-2h2v2h-2zm-2 0h2v2h-2v-2zm0 0H8v-2h2v2z" fill="currentColor"/>
    </svg>
  );
};

BriefcaseCheck.displayName = 'BriefcaseCheck';
