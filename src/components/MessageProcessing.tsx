import React from 'react';

export interface MessageProcessingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessageProcessing = ({size = 24, className = "", ...props}: MessageProcessingProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2h2zm5 7H7v2h2V9zm2 0h2v2h-2V9zm6 0h-2v2h2V9z" fill="currentColor"/>
    </svg>
  );
};

MessageProcessing.displayName = 'MessageProcessing';
