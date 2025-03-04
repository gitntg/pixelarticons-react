import React from 'react';

export interface TextColumsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TextColums = ({size = 24, className = "", ...props}: TextColumsProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 5H3v2h8V5zm10 0h-8v2h8V5zM3 9h8v2H3V9zm18 0h-8v2h8V9zM3 13h8v2H3v-2zm18 0h-8v2h8v-2zM3 17h8v2H3v-2zm18 0h-8v2h8v-2z" fill="currentColor"/>
    </svg>
  );
};

TextColums.displayName = 'TextColums';
