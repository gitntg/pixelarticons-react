import React from 'react';

export interface ShieldProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Shield = ({size = 24, className = "", ...props}: ShieldProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M22 2H2v12h2V4h16v10h2V2zM6 14H4v2h2v-2zm0 2h2v2h2v2H8v-2H6v-2zm4 4v2h4v-2h2v-2h-2v2h-4zm10-6h-2v2h-2v2h2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

Shield.displayName = 'Shield';
