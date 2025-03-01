import React from 'react';

export interface BookProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Book = ({size = 24, className = "", ...props}: BookProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 2h12v20H4V2h4zm4 8h-2v2H8V4H6v16h12V4h-4v8h-2v-2z" fill="currentColor"/>
    </svg>
  );
};

Book.displayName = 'Book';
