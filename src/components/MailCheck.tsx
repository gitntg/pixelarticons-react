import React from 'react';

export interface MailCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MailCheck = ({size = 24, className = "", ...props}: MailCheckProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4h18v10h-2V6H4v12h8v2H2V4h2zm4 4H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8zm6 10h2v2h-2v-2zm4 2v2h-2v-2h2zm2-2h-2v2h2v-2zm0 0v-2h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

MailCheck.displayName = 'MailCheck';
