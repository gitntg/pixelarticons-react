import React from 'react';

export interface UploadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Upload = ({size = 24, className = "", ...props}: UploadProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 5V3h2v2h2v2h2v2h-2V7h-2v10h-2V7H9v2H7V7h2V5h2zM3 15v6h18v-6h-2v4H5v-4H3z" fill="currentColor"/>
    </svg>
  );
};

Upload.displayName = 'Upload';
