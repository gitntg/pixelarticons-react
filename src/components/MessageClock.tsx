import React from 'react';

export interface MessageClockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessageClock = ({size = 24, className = "", ...props}: MessageClockProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 2H2v20h2V4h16v4h2V2h-2zM8 16H6v2H4v2h2v-2h2v-2zm6-2h2v2h2v2h-4v-4zm6-4h-8v2h-2v8h2v2h8v-2h2v-8h-2v-2zm0 2v8h-8v-8h8z" fill="currentColor"/>
    </svg>
  );
};

MessageClock.displayName = 'MessageClock';
