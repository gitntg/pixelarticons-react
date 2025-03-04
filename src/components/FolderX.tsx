import React from 'react';

export interface FolderXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FolderX = ({size = 24, className = "", ...props}: FolderXProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M12 4H2v16h20V6H12V4zm-2 4h10v10H4V6h6v2zm6 4h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2z" fill="currentColor"/>
    </svg>
  );
};

FolderX.displayName = 'FolderX';
