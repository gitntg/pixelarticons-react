import React from 'react';

export interface LayoutAlignTopProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutAlignTop = ({size = 24, className = "", ...props}: LayoutAlignTopProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 20H8V8h8v12zm-6-10v8h4v-8h-4zm10-6v2H4V4h16z" fill="currentColor"/>
    </svg>
  );
};

LayoutAlignTop.displayName = 'LayoutAlignTop';
