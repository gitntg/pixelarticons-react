import React from 'react';

export interface SyncProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Sync = ({size = 24, className = "", ...props}: SyncProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 9V7h12V5h2v2h2v2h-2v2h-2V9H4zm12 2h-2v2h2v-2zm0-6h-2V3h2v2zm4 12v-2H8v-2h2v-2H8v2H6v2H4v2h2v2h2v2h2v-2H8v-2h12z" fill="currentColor"/>
    </svg>
  );
};

Sync.displayName = 'Sync';
