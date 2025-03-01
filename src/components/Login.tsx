import React from 'react';

export interface LoginProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Login = ({size = 24, className = "", ...props}: LoginProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3H3v4h2V5h14v14H5v-2H3v4h18V3H5zm12 8h-2V9h-2V7h-2v2h2v2H3v2h10v2h-2v2h2v-2h2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

Login.displayName = 'Login';
