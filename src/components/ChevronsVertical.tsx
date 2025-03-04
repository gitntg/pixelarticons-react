import React from 'react';

export interface ChevronsVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ChevronsVertical = ({size = 24, className = "", ...props}: ChevronsVerticalProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 4h2v2h-2V4zM9 8V6h2v2H9zm0 0v2H7V8h2zm6 0h-2V6h2v2zm0 0h2v2h-2V8zm-6 8H7v-2h2v2zm2 2H9v-2h2v2zm2 0v2h-2v-2h2zm2-2h-2v2h2v-2zm0 0v-2h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

ChevronsVertical.displayName = 'ChevronsVertical';
