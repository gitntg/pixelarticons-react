import React from 'react';

export interface MessageArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MessageArrowRight = ({size = 24, className = "", ...props}: MessageArrowRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2h18v10h-2V4H4v18H2V2h2zm2 14h4v2H6v2H4v-2h2v-2zm16 0h-2v-2h-2v-2h-2v2h2v2h-6v2h6v2h-2v2h2v-2h2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

MessageArrowRight.displayName = 'MessageArrowRight';
