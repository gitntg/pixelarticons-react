import React from 'react';

export interface NotesPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NotesPlus = ({size = 24, className = "", ...props}: NotesPlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 2h16v12h-2V4H5v16h8v2H3V2h2zm2 4h10v2H7V6zm10 4H7v2h10v-2zM7 14h7v2H7v-2zm13 5h3v2h-3v3h-2v-3h-3v-2h3v-3h2v3z" fill="currentColor"/>
    </svg>
  );
};

NotesPlus.displayName = 'NotesPlus';
