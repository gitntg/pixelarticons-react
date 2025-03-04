import React from 'react';

export interface CameraAltProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CameraAlt = ({size = 24, className = "", ...props}: CameraAltProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4H2v16h20V4H4zm16 2v12H4V6h16zM8 8H6v2h2V8zm4 0h4v2h-4V8zm-2 2h2v4h-2v-4zm6 4h2v-4h-2v4zm0 0h-4v2h4v-2z" fill="currentColor"/>
    </svg>
  );
};

CameraAlt.displayName = 'CameraAlt';
