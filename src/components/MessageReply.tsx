import React from 'react';

export interface MessageReplyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessageReply = ({size = 24, className = "", ...props}: MessageReplyProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2h18v20h-2V4H4v12h14v2h2v2h-2v-2H2V2h2z" fill="currentColor"/>
    </svg>
  );
};

MessageReply.displayName = 'MessageReply';
