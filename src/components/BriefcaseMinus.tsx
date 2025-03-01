import React from 'react';

export interface BriefcaseMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BriefcaseMinus = ({size = 24, className = "", ...props}: BriefcaseMinusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 3h8v4h6v6h-2V9H4v10h10v2H2V7h6V3zm6 2h-4v2h4V5zm2 12h6v2h-6v-2z" fill="currentColor"/>
    </svg>
  );
};

BriefcaseMinus.displayName = 'BriefcaseMinus';
