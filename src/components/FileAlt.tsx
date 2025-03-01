import React from 'react';

export interface FileAltProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FileAlt = ({size = 24, className = "", ...props}: FileAltProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M21 22H3V2h12v2h2v2h2v2h2v14zM17 6h-2v2h2V6zM5 4v16h14V10h-6V4H5zm8 12H7v2h6v-2zm-6-4h10v2H7v-2zm4-4H7v2h4V8z" fill="currentColor"/>
    </svg>
  );
};

FileAlt.displayName = 'FileAlt';
