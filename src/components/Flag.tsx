import React from 'react';

export interface FlagProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Flag = ({size = 24, className = "", ...props}: FlagProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 2h10v2h8v14H11v-2H5v6H3V2zm2 12h8v2h6V6h-8V4H5v10z" fill="currentColor"/>
    </svg>
  );
};

Flag.displayName = 'Flag';
