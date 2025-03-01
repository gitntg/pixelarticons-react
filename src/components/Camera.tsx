import React from 'react';

export interface CameraProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Camera = ({size = 24, className = "", ...props}: CameraProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M9 3H7v2H2v16h20V5h-5V3H9zm8 4h3v12H4V7h5V5h6v2h2zm-7 2h4v2h-4V9zm4 6h-4v2h4v-2h2v-4h-2v4zm-6-4h2v4H8v-4z" fill="currentColor"/>
    </svg>
  );
};

Camera.displayName = 'Camera';
