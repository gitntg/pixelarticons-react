import React from 'react';

export interface FileFlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FileFlash = ({size = 24, className = "", ...props}: FileFlashProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M19 22h-6v-2h6V10h-6V4H5v8H3V2h12v2h2v2h2v2h2v14h-2zM17 6h-2v2h2V6zM7 12h2v4h4v2h-2v2H9v2H7v-4H3v-2h2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

FileFlash.displayName = 'FileFlash';
