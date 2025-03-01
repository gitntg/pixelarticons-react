import React from 'react';

export interface HeadphoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Headphone = ({size = 24, className = "", ...props}: HeadphoneProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M19 4H5v2H3v14h7v-8H5V6h14v6h-5v8h7V6h-2V4zm-3 10h3v4h-3v-4zm-8 0v4H5v-4h3z" fill="currentColor"/>
    </svg>
  );
};

Headphone.displayName = 'Headphone';
