import React from 'react';

export interface PaperclipProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Paperclip = ({size = 24, className = "", ...props}: PaperclipProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 5h16v10H7V9h10v2H9v2h10V7H5v10h14v2H3V5h2z" fill="currentColor"/>
    </svg>
  );
};

Paperclip.displayName = 'Paperclip';
