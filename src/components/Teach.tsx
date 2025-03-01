import React from 'react';

export interface TeachProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Teach = ({size = 24, className = "", ...props}: TeachProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M9 2H5v4h4V2zm7 7V7H2v9h2v6h2v-6h2v6h2V9h6zm-5-7h11v14H11v-2h9V4h-9V2z" fill="currentColor"/>
    </svg>
  );
};

Teach.displayName = 'Teach';
