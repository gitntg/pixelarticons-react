import React from 'react';

export interface BriefcaseAccountProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BriefcaseAccount = ({size = 24, className = "", ...props}: BriefcaseAccountProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 3H8v4H2v14h20V7h-6V3zm-2 4h-4V5h4v2zM4 19V9h16v10H4zm6-8h4v3h-4v-3zm-2 4h8v2H8v-2z" fill="currentColor"/>
    </svg>
  );
};

BriefcaseAccount.displayName = 'BriefcaseAccount';
