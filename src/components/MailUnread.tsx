import React from 'react';

export interface MailUnreadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MailUnread = ({size = 24, className = "", ...props}: MailUnreadProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M22 2h-6v6h6V2zM4 4h10v2H4v12h16v-8h2v10H2V4h2zm4 4H6v2h2v2h2v2h4v-2h2v-2h-2v2h-4v-2H8V8z" fill="currentColor"/>
    </svg>
  );
};

MailUnread.displayName = 'MailUnread';
