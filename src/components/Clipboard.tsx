import React from 'react';

export interface ClipboardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Clipboard = ({size = 24, className = "", ...props}: ClipboardProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 2h6v2h4v18H4V4h4V2h2zm6 4v2H8V6H6v14h12V6h-2zm-2 0V4h-4v2h4z" fill="currentColor"/>
    </svg>
  );
};

Clipboard.displayName = 'Clipboard';
