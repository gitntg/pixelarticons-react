import React from 'react';

export interface Github2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Github2 = ({size = 24, className = "", ...props}: Github2Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path fill="currentColor" d="M6 2h12v2H6V2Zm4 12H8v-2h2v2Zm4 0v2h-4v-2h4Zm0 0v-2h2v2h-2Z"/>
      <path fill="currentColor" d="M6 6V4H4v2H2v12h2v2h2v2h12v-2h2v-2h2V6h-2V4h-2v2h-2v2H8V6H6Zm2 6v-2h8v2h2V6h2v12h-2v2h-2v-4h-2v4h-4v-4H6v2h2v2H6v-2H4v-2h2v-2H4V6h2v6h2Z"/>
    </svg>
  );
};

Github2.displayName = 'Github2';
