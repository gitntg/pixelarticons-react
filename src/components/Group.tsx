import React from 'react';

export interface GroupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Group = ({size = 24, className = "", ...props}: GroupProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h4v4H7V7zm6 0h4v4h-4V7zm-6 6h4v4H7v-4zm6 0h4v4h-4v-4z" fill="currentColor"/>
    </svg>
  );
};

Group.displayName = 'Group';
