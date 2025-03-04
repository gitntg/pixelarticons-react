import React from 'react';

export interface OpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Open = ({size = 24, className = "", ...props}: OpenProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3h6v2H5v14h14v-6h2v8H3V3h2zm8 0h8v8h-2V7h-2V5h-4V3zm0 8h-2v2H9v2h2v-2h2v-2zm4-4h-2v2h-2v2h2V9h2V7z" fill="currentColor"/>
    </svg>
  );
};

Open.displayName = 'Open';
