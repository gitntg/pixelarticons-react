import React from 'react';

export interface MoreHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MoreHorizontal = ({size = 24, className = "", ...props}: MoreHorizontalProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M1 9h6v6H1V9zm2 2v2h2v-2H3zm6-2h6v6H9V9zm2 2v2h2v-2h-2zm6-2h6v6h-6V9zm2 2v2h2v-2h-2z" fill="currentColor"/>
    </svg>
  );
};

MoreHorizontal.displayName = 'MoreHorizontal';
