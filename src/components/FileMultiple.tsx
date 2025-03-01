import React from 'react';

export interface FileMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FileMultiple = ({size = 24, className = "", ...props}: FileMultipleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M21 18H7V2h8v2h2v2h-2v2h2V6h2v2h2v10zM9 4v12h10v-6h-6V4H9zM3 6h2v14h12v2H3V6z" fill="currentColor"/>
    </svg>
  );
};

FileMultiple.displayName = 'FileMultiple';
