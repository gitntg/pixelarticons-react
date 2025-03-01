import React from 'react';

export interface CornerRightDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CornerRightDown = ({size = 24, className = "", ...props}: CornerRightDownProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 6v10h2v2h-2v2h-2v-2h-2v-2h2V6H4V4h12v2zm-4 10h-2v-2h2v2zm6 0h2v-2h-2v2z" fill="currentColor"/>
    </svg>
  );
};

CornerRightDown.displayName = 'CornerRightDown';
