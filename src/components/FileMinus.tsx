import React from 'react';

export interface FileMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FileMinus = ({size = 24, className = "", ...props}: FileMinusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M13 22h8V8h-2V6h-2v2h-2V6h2V4h-2V2H3v13h2V4h8v6h6v10h-6v2zm-2-3H3v-2h8v2z" fill="currentColor"/>
    </svg>
  );
};

FileMinus.displayName = 'FileMinus';
