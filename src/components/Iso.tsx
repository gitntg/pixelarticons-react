import React from 'react';

export interface IsoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Iso = ({size = 24, className = "", ...props}: IsoProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 3H6v3H3v2h3v3h2V8h3V6H8V3zm11 2h-2v2h-2v2h-2v2h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v-2h2V9h2V7h2V5zm-6 13v-2h8v2h-8z" fill="currentColor"/>
    </svg>
  );
};

Iso.displayName = 'Iso';
