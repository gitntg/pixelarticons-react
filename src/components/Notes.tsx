import React from 'react';

export interface NotesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Notes = ({size = 24, className = "", ...props}: NotesProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 2h16v20H3V2h2zm14 18V4H5v16h14zM7 6h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2z" fill="currentColor"/>
    </svg>
  );
};

Notes.displayName = 'Notes';
