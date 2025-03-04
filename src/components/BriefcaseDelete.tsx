import React from 'react';

export interface BriefcaseDeleteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BriefcaseDelete = ({size = 24, className = "", ...props}: BriefcaseDeleteProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 3H8v4H2v14h12v-2H4V9h16v4h2V7h-6V3zm-2 4h-4V5h4v2zm4 8h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2h2v-2h-2v2h-2v-2z" fill="currentColor"/>
    </svg>
  );
};

BriefcaseDelete.displayName = 'BriefcaseDelete';
