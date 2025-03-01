import React from 'react';

export interface SpeakerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Speaker = ({size = 24, className = "", ...props}: SpeakerProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2H3v20h18V2H4zm15 2v16H5V4h14zm-6 2h-2v2h2V6zm-5 4h8v6h-2v-4h-4v4H8v-6zm8 6H8v2h8v-2z" fill="currentColor"/>
    </svg>
  );
};

Speaker.displayName = 'Speaker';
