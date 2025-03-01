import React from 'react';

export interface AndroidProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Android = ({size = 24, className = "", ...props}: AndroidProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 5h2v2H2V5zm4 4H4V7h2v2zm2 0H6v2H4v2H2v6h20v-6h-2v-2h-2V9h2V7h2V5h-2v2h-2v2h-2V7H8v2zm0 0h8v2h2v2h2v4H4v-4h2v-2h2V9zm2 4H8v2h2v-2zm4 0h2v2h-2v-2z" fill="currentColor"/>
    </svg>
  );
};

Android.displayName = 'Android';
