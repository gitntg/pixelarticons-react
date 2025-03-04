import React from 'react';

export interface HumanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Human = ({size = 24, className = "", ...props}: HumanProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 2h4v4h-4V2zM3 7h18v2h-6v13h-2v-6h-2v6H9V9H3V7z" fill="currentColor"/>
    </svg>
  );
};

Human.displayName = 'Human';
