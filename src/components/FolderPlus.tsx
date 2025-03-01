import React from 'react';

export interface FolderPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FolderPlus = ({size = 24, className = "", ...props}: FolderPlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4h8v2h10v14H2V4h2zm16 4H10V6H4v12h16V8zm-6 2h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

FolderPlus.displayName = 'FolderPlus';
