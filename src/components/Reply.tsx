import React from 'react';

export interface ReplyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Reply = ({size = 24, className = "", ...props}: ReplyProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M12 19h-2v-2H8v-2H6v-2H4v-2h2V9h2V7h2V5h2v4h8v6h-8v4z" fill="currentColor"/>
    </svg>
  );
};

Reply.displayName = 'Reply';
