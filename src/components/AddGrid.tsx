import React from 'react';

export interface AddGridProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AddGrid = ({size = 24, className = "", ...props}: AddGridProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h8v8H3V3zm6 6V5H5v4h4zm9 4h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3zM15 3h6v8h-8V3h2zm4 6V5h-4v4h4zM5 13h6v8H3v-8h2zm4 6v-4H5v4h4z" fill="currentColor"/>
    </svg>
  );
};

AddGrid.displayName = 'AddGrid';
