import React from 'react';

export interface UnlinkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Unlink = ({size = 24, className = "", ...props}: UnlinkProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M13 4h-2v16h2V4zM4 6h5v2H4v8h5v2H2V6h2zm11 0h7v12h-7v-2h5V8h-5V6z" fill="currentColor"/>
    </svg>
  );
};

Unlink.displayName = 'Unlink';
