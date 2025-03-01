import React from 'react';

export interface NextProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Next = ({size = 24, className = "", ...props}: NextProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 4h2v2h2v2h2v2h2v4h-2v2h-2v2H8v2H6V4zm12 0h-2v16h2V4z" fill="currentColor"/>
    </svg>
  );
};

Next.displayName = 'Next';
