import React from 'react';

export interface LayoutAlignLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutAlignLeft = ({size = 24, className = "", ...props}: LayoutAlignLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 16V8H8v8h12zm-10-6h8v4h-8v-4zM4 20h2V4H4v16z" fill="currentColor"/>
    </svg>
  );
};

LayoutAlignLeft.displayName = 'LayoutAlignLeft';
