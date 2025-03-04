import React from 'react';

export interface AspectRatioProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AspectRatio = ({size = 24, className = "", ...props}: AspectRatioProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 4h20v16H2V4zm2 14h16V6H4v12zM8 8h2v2H8v2H6V8h2zm8 8h-2v-2h2v-2h2v4h-2z" fill="currentColor"/>
    </svg>
  );
};

AspectRatio.displayName = 'AspectRatio';
