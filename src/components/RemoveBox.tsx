import React from 'react';

export interface RemoveBoxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const RemoveBox = ({size = 24, className = "", ...props}: RemoveBoxProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-3 6H8v2h8v-2z" fill="currentColor"/>
    </svg>
  );
};

RemoveBox.displayName = 'RemoveBox';
