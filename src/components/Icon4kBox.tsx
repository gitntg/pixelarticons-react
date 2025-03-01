import React from 'react';

export interface Icon4kBoxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Icon4kBox = ({size = 24, className = "", ...props}: Icon4kBoxProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 4H1v16h22V4H3zm18 2v12H3V6h18zM7 8H5v5h4v3h2V8H9v3H7V8zm8 0h-2v8h2v-3h2v3h2v-3h-2v-2h2V8h-2v3h-2V8z" fill="currentColor"/>
    </svg>
  );
};

Icon4kBox.displayName = 'Icon4kBox';
