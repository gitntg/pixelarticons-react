import React from 'react';

export interface ReplyAllProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ReplyAll = ({size = 24, className = "", ...props}: ReplyAllProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M13 19h2v-4h7V9h-7V5h-2v2h-2v2H9v2H7v2h2v2h2v2h2v2zM8 7H6v2H4v2H2v2h2v2h2v2h2v2h2v-2H8v-2H6v-2H4v-2h2V9h2V7zm0 0h2V5H8v2z" fill="currentColor"/>
    </svg>
  );
};

ReplyAll.displayName = 'ReplyAll';
