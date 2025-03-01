import React from 'react';

export interface MessageMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessageMinus = ({size = 24, className = "", ...props}: MessageMinusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2h2zm12 7H8v2h8V9z" fill="currentColor"/>
    </svg>
  );
};

MessageMinus.displayName = 'MessageMinus';
