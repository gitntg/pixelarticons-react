import React from 'react';

export interface RadioOnProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const RadioOn = ({size = 24, className = "", ...props}: RadioOnProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 3H7v2H5v2H3v10h2v2h2v2h10v-2h2v-2h2V7h-2V5h-2V3zm0 2v2h2v10h-2v2H7v-2H5V7h2V5h10zm-9 6h2v2h2v2h-2v-2H8v-2zm8-2h-2v2h-2v2h2v-2h2V9z" fill="currentColor"/>
    </svg>
  );
};

RadioOn.displayName = 'RadioOn';
