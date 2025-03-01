import React from 'react';

export interface LayoutAlignRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutAlignRight = ({size = 24, className = "", ...props}: LayoutAlignRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 8v8h12V8H4zm10 6H6v-4h8v4zm6-10h-2v16h2V4z" fill="currentColor"/>
    </svg>
  );
};

LayoutAlignRight.displayName = 'LayoutAlignRight';
