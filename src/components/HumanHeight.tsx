import React from 'react';

export interface HumanHeightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HumanHeight = ({size = 24, className = "", ...props}: HumanHeightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 2h4v4H6V2zM3 7h10v9h-2v6H9v-6H7v6H5v-6H3V7zm18-4h-6v2h6V3zm-4 4h4v2h-4V7zm4 4h-6v2h6v-2zm-6 8h6v2h-6v-2zm6-4h-4v2h4v-2z" fill="currentColor"/>
    </svg>
  );
};

HumanHeight.displayName = 'HumanHeight';
