import React from 'react';

export interface MessageFlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessageFlash = ({size = 24, className = "", ...props}: MessageFlashProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 2H2v20h2V4h16v10h2V2h-2zM10 16H6v2H4v2h2v-2h4v-2zm6-4h2v4h4v2h-2v2h-2v2h-2v-4h-4v-2h2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

MessageFlash.displayName = 'MessageFlash';
