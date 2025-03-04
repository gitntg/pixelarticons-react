import React from 'react';

export interface MessageImageProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessageImage = ({size = 24, className = "", ...props}: MessageImageProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2h2zm10 4h-2v2h-2v2H8v2H6v2h2v-2h2v-2h2V8h2v2h2v2h2v-2h-2V8h-2V6zM6 6h2v2H6V6z" fill="currentColor"/>
    </svg>
  );
};

MessageImage.displayName = 'MessageImage';
