import React from 'react';

export interface MessageDeleteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessageDelete = ({size = 24, className = "", ...props}: MessageDeleteProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2h2zm9 7h-2V7H9v2h2v2H9v2h2v-2h2v2h2v-2h-2V9zm0 0V7h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

MessageDelete.displayName = 'MessageDelete';
