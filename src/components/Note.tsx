import React from 'react';

export interface NoteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Note = ({size = 24, className = "", ...props}: NoteProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 2h18v14h-2v2h-2v-2h-2v2h2v2h-2v2H3V2zm2 2v16h8v-6h6V4H5z" fill="currentColor"/>
    </svg>
  );
};

Note.displayName = 'Note';
