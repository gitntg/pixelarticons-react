import React from 'react';

export interface PauseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Pause = ({size = 24, className = "", ...props}: PauseProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 4H5v16h5V4zm9 0h-5v16h5V4z" fill="currentColor"/>
    </svg>
  );
};

Pause.displayName = 'Pause';
