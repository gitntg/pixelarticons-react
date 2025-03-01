import React from 'react';

export interface TrendingDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TrendingDown = ({size = 24, className = "", ...props}: TrendingDownProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 8h2v2h2v2h2v2h2v-2h2v-2h2v2h2v2h2v2h-4v2h8v-8h-2v4h-2v-2h-2v-2h-2V8h-2v2h-2v2H8v-2H6V8H4V6H2v2z" fill="currentColor"/>
    </svg>
  );
};

TrendingDown.displayName = 'TrendingDown';
