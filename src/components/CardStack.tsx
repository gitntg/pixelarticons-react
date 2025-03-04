import React from 'react';

export interface CardStackProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CardStack = ({size = 24, className = "", ...props}: CardStackProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4h18v12H2V4h2zm16 10V6H4v8h16zm2 4H2v2h20v-2z" fill="currentColor"/>
    </svg>
  );
};

CardStack.displayName = 'CardStack';
