import React from 'react';

export interface BriefcaseSearch1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BriefcaseSearch1 = ({size = 24, className = "", ...props}: BriefcaseSearch1Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 3H8v4H2v14h7v-2H4V9h18V7h-6V3zm-2 4h-4V5h4v2zm0 4h8v2h-8v-2zm0 10h-2v-8h2v8zm8 0v2h-8v-2h8zm0 0h2v-8h-2v8zm-6-6h2v2h2v2h-4v-4z" fill="currentColor"/>
    </svg>
  );
};

BriefcaseSearch1.displayName = 'BriefcaseSearch1';
