import React from 'react';

export interface CornerDownRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CornerDownRight = ({size = 24, className = "", ...props}: CornerDownRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 16h10v2h2v-2h2v-2h-2v-2h-2v2H6V4H4v12h2zm10-4v-2h-2v2h2zm0 6v2h-2v-2h2z" fill="currentColor"/>
    </svg>
  );
};

CornerDownRight.displayName = 'CornerDownRight';
