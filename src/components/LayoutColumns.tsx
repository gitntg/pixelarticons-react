import React from 'react';

export interface LayoutColumnsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutColumns = ({size = 24, className = "", ...props}: LayoutColumnsProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 5h20v14H2V5zm2 2v10h7V7H4zm9 0v10h7V7h-7z" fill="currentColor"/>
    </svg>
  );
};

LayoutColumns.displayName = 'LayoutColumns';
