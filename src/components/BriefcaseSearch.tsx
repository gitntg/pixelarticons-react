import React from 'react';

export interface BriefcaseSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BriefcaseSearch = ({size = 24, className = "", ...props}: BriefcaseSearchProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 3H8v4H2v14h10v-2H4V9h16v2h2V7h-6V3zm-2 4h-4V5h4v2zm6 6h-6v6h6v2h2v-2h-2v-6zm-4 4v-2h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

BriefcaseSearch.displayName = 'BriefcaseSearch';
