import React from 'react';

export interface MessageArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessageArrowLeft = ({size = 24, className = "", ...props}: MessageArrowLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2h18v12h-2V4H4v18H2V2h2zm2 14h4v2H6v2H4v-2h2v-2zm16 0h-6v-2h2v-2h-2v2h-2v2h-2v2h2v2h2v2h2v-2h-2v-2h6v-2z" fill="currentColor"/>
    </svg>
  );
};

MessageArrowLeft.displayName = 'MessageArrowLeft';
