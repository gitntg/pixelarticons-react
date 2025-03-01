import React from 'react';

export interface MoreVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MoreVertical = ({size = 24, className = "", ...props}: MoreVerticalProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M15 1v6H9V1h6zm-2 2h-2v2h2V3zm2 6v6H9V9h6zm-2 2h-2v2h2v-2zm2 6v6H9v-6h6zm-2 2h-2v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

MoreVertical.displayName = 'MoreVertical';
