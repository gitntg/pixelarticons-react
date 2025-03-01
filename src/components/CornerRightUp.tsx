import React from 'react';

export interface CornerRightUpProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CornerRightUp = ({size = 24, className = "", ...props}: CornerRightUpProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 18V8h2V6h-2V4h-2v2h-2v2h2v10H4v2h12v-2zM12 8h-2v2h2V8zm6 0h2v2h-2V8z" fill="currentColor"/>
    </svg>
  );
};

CornerRightUp.displayName = 'CornerRightUp';
