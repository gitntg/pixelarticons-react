import React from 'react';

export interface ChatProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Chat = ({size = 24, className = "", ...props}: ChatProps) => {
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

Chat.displayName = 'Chat';
