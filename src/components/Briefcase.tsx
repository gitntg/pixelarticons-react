import React from 'react';

export interface BriefcaseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Briefcase = ({size = 24, className = "", ...props}: BriefcaseProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 3h8v4h6v14H2V7h6V3zm2 4h4V5h-4v2zM4 9v10h16V9H4z" fill="currentColor"/>
    </svg>
  );
};

Briefcase.displayName = 'Briefcase';
