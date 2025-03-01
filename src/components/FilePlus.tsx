import React from 'react';

export interface FilePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FilePlus = ({size = 24, className = "", ...props}: FilePlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M19 22h-7v-2h7V10h-6V4H5v8H3V2h12v2h2v2h2v2h2v14h-2zM17 6h-2v2h2V6zM8 19h3v-2H8v-3H6v3H3v2h3v3h2v-3z" fill="currentColor"/>
    </svg>
  );
};

FilePlus.displayName = 'FilePlus';
