import React from 'react';

export interface MessageTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessageText = ({size = 24, className = "", ...props}: MessageTextProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2h-2zM6 7h12v2H6V7zm8 4H6v2h8v-2z" fill="currentColor"/>
    </svg>
  );
};

MessageText.displayName = 'MessageText';
