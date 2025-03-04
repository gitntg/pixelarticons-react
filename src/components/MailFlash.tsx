import React from 'react';

export interface MailFlashProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MailFlash = ({size = 24, className = "", ...props}: MailFlashProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4h18v8h-2V6H4v12h8v2H2V4h2zm4 4H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8zm10 6h2v4h4v2h-2v2h-2v2h-2v-4h-4v-2h2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

MailFlash.displayName = 'MailFlash';
