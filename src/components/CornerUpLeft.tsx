import React from 'react';

export interface CornerUpLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CornerUpLeft = ({size = 24, className = "", ...props}: CornerUpLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 8H8V6H6v2H4v2h2v2h2v-2h10v10h2V8h-2zM8 12v2h2v-2H8zm0-6V4h2v2H8z" fill="currentColor"/>
    </svg>
  );
};

CornerUpLeft.displayName = 'CornerUpLeft';
