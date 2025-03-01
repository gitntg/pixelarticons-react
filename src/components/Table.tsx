import React from 'react';

export interface TableProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Table = ({size = 24, className = "", ...props}: TableProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 3h20v18H2V3zm2 4v5h7V7H4zm9 0v5h7V7h-7zm7 7h-7v5h7v-5zm-9 5v-5H4v5h7z" fill="currentColor"/>
    </svg>
  );
};

Table.displayName = 'Table';
