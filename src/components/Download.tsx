import React from 'react';

export interface DownloadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Download = ({size = 24, className = "", ...props}: DownloadProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M13 17V3h-2v10H9v-2H7v2h2v2h2v2h2zm8 2v-4h-2v4H5v-4H3v6h18v-2zm-8-6v2h2v-2h2v-2h-2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

Download.displayName = 'Download';
