import React from 'react';

export interface FileOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FileOff = ({size = 24, className = "", ...props}: FileOffProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 2H3v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2v-2h-2v-2h-2v-2h6v4h2V8h-2V6h-2V4h-2V2H9v2h4v6h-2V8H9V6H7V4H5V2zm12 4v2h-2V6h2zM3 8h2v12h12v2H3V8z" fill="currentColor"/>
    </svg>
  );
};

FileOff.displayName = 'FileOff';
