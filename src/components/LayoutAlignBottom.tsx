import React from 'react';

export interface LayoutAlignBottomProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutAlignBottom = ({size = 24, className = "", ...props}: LayoutAlignBottomProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 4H8v12h8V4zm-6 10V6h4v8h-4zm10 6v-2H4v2h16z" fill="currentColor"/>
    </svg>
  );
};

LayoutAlignBottom.displayName = 'LayoutAlignBottom';
