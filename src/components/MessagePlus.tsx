import React from 'react';

export interface MessagePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessagePlus = ({size = 24, className = "", ...props}: MessagePlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2h-2zm-7 7h3v2h-3v3h-2v-3H8V9h3V6h2v3z" fill="currentColor"/>
    </svg>
  );
};

MessagePlus.displayName = 'MessagePlus';
