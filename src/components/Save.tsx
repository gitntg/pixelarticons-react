import React from 'react';

export interface SaveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Save = ({size = 24, className = "", ...props}: SaveProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2h14v2H4v16h2v-6h12v6h2V6h2v16H2V2h2zm4 18h8v-4H8v4zM20 6h-2V4h2v2zM6 6h9v4H6V6z" fill="currentColor"/>
    </svg>
  );
};

Save.displayName = 'Save';
