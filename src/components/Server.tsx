import React from 'react';

export interface ServerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Server = ({size = 24, className = "", ...props}: ServerProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h18v18H3V3zm2 2v6h14V5H5zm14 8H5v6h14v-6zM7 7h2v2H7V7zm2 8H7v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

Server.displayName = 'Server';
