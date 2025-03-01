import React from 'react';

export interface FolderProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Folder = ({size = 24, className = "", ...props}: FolderProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4h8v2h10v14H2V4h2zm16 4H10V6H4v12h16V8z" fill="currentColor"/>
    </svg>
  );
};

Folder.displayName = 'Folder';
