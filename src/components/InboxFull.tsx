import React from 'react';

export interface InboxFullProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const InboxFull = ({size = 24, className = "", ...props}: InboxFullProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 2h18v20H3V2zm2 2v10h4v2h6v-2h4V4H5zm14 12h-2v2H7v-2H5v4h14v-4zM7 6h10v2H7V6zm0 4h10v2H7v-2z" fill="currentColor"/>
    </svg>
  );
};

InboxFull.displayName = 'InboxFull';
