import React from 'react';

export interface LayoutDistributeHorizontalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutDistributeHorizontal = ({size = 24, className = "", ...props}: LayoutDistributeHorizontalProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 4H4v16h2V4zm14 0h-2v16h2V4zM10 7h6v10H8V7h2zm4 8V9h-4v6h4z" fill="currentColor"/>
    </svg>
  );
};

LayoutDistributeHorizontal.displayName = 'LayoutDistributeHorizontal';
