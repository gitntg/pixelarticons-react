import React from 'react';

export interface LinkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Link = ({size = 24, className = "", ...props}: LinkProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 6h7v2H4v8h7v2H2V6h2zm16 0h-7v2h7v8h-7v2h9V6h-2zm-3 5H7v2h10v-2z" fill="currentColor"/>
    </svg>
  );
};

Link.displayName = 'Link';
