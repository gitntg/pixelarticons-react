import React from 'react';

export interface MailProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Mail = ({size = 24, className = "", ...props}: MailProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z" fill="currentColor"/>
    </svg>
  );
};

Mail.displayName = 'Mail';
