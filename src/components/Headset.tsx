import React from 'react';

export interface HeadsetProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Headset = ({size = 24, className = "", ...props}: HeadsetProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M19 2H5v2H3v14h7v-8H5V4h14v6h-5v8h3v2h-6v2h8v-4h2V4h-2V2zm-3 10h3v4h-3v-4zm-8 0v4H5v-4h3z" fill="currentColor"/>
    </svg>
  );
};

Headset.displayName = 'Headset';
