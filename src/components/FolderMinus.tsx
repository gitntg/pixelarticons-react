import React from 'react';

export interface FolderMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FolderMinus = ({size = 24, className = "", ...props}: FolderMinusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M12 4H2v16h20V6H12V4zm-2 4h10v10H4V6h6v2zm8 6v-2h-6v2h6z" fill="currentColor"/>
    </svg>
  );
};

FolderMinus.displayName = 'FolderMinus';
