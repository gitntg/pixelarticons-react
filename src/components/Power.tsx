import React from 'react';

export interface PowerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Power = ({size = 24, className = "", ...props}: PowerProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 2h-2v4H6v2H4v8h2v2h2v4h8v-2h4v-2h-4v-2h4v-2h-4v-2H8v4H6V8h12V6h2V2zm-6 18h-4v-6h4v6z" fill="currentColor"/>
    </svg>
  );
};

Power.displayName = 'Power';
