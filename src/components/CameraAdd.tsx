import React from 'react';

export interface CameraAddProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CameraAdd = ({size = 24, className = "", ...props}: CameraAddProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 2H3v3H0v2h3v3h2V7h3V5H5V2zm12 1h-7v2h5v2h5v12H5v-7H3v9h19V5h-5V3zm-7 6h4v2h2v4h-2v2h-4v-2h4v-4h-4V9zm-2 2h2v4H8v-4z" fill="currentColor"/>
    </svg>
  );
};

CameraAdd.displayName = 'CameraAdd';
