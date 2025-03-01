import React from 'react';

export interface LogoutProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Logout = ({size = 24, className = "", ...props}: LogoutProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3h16v4h-2V5H5v14h14v-2h2v4H3V3h2zm16 8h-2V9h-2V7h-2v2h2v2H7v2h10v2h-2v2h2v-2h2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

Logout.displayName = 'Logout';
