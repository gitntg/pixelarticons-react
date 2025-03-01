import React from 'react';

export interface AddRowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AddRow = ({size = 24, className = "", ...props}: AddRowProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 10V2H2v10h20V2h-2v8h-4V2h-2v8h-4V2H8v8H4zm9 9v3h-2v-3H8v-2h3v-3h2v3h3v2h-3z" fill="currentColor"/>
    </svg>
  );
};

AddRow.displayName = 'AddRow';
