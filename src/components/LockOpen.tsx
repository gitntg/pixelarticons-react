import React from 'react';

export interface LockOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LockOpen = ({size = 24, className = "", ...props}: LockOpenProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M15 2H9v2H7v2h2V4h6v4H4v14h16V8h-3V4h-2V2zm0 8h3v10H6V10h9zm-2 3h-2v4h2v-4z" fill="currentColor"/>
    </svg>
  );
};

LockOpen.displayName = 'LockOpen';
