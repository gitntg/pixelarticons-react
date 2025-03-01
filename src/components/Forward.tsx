import React from 'react';

export interface ForwardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Forward = ({size = 24, className = "", ...props}: ForwardProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M14 5h-2v4H6v2H4v6h2v-2h6v4h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5z" fill="currentColor"/>
    </svg>
  );
};

Forward.displayName = 'Forward';
