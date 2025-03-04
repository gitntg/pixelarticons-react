import React from 'react';

export interface ScaleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Scale = ({size = 24, className = "", ...props}: ScaleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M21 3h-8v2h4v2h2v4h2V3zm-4 4h-2v2h-2v2h2V9h2V7zm-8 8h2v-2H9v2H7v2h2v-2zm-4-2v4h2v2H5h6v2H3v-8h2z" fill="currentColor"/>
    </svg>
  );
};

Scale.displayName = 'Scale';
