import React from 'react';

export interface AlignRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AlignRight = ({size = 24, className = "", ...props}: AlignRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 5h16v2H4V5zm8 4h8v2h-8V9zm-8 4v2h16v-2H4zm8 4h8v2h-8v-2z" fill="currentColor"/>
    </svg>
  );
};

AlignRight.displayName = 'AlignRight';
