import React from 'react';

export interface UserProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const User = ({size = 24, className = "", ...props}: UserProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M15 2H9v2H7v6h2V4h6V2zm0 8H9v2h6v-2zm0-6h2v6h-2V4zM4 16h2v-2h12v2H6v4h12v-4h2v6H4v-6z" fill="currentColor"/>
    </svg>
  );
};

User.displayName = 'User';
