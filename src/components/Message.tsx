import React from 'react';

export interface MessageProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Message = ({size = 24, className = "", ...props}: MessageProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2h-2z" fill="currentColor"/>
    </svg>
  );
};

Message.displayName = 'Message';
