import React from 'react';

export interface NotesMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NotesMultiple = ({size = 24, className = "", ...props}: NotesMultipleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M7 0h16v20H5V0h2zm14 18V2H7v16h14zM9 4h10v2H9V4zm10 4H9v2h10V8zM9 12h7v2H9v-2zm10 10H3V4H1v20h18v-2z" fill="currentColor"/>
    </svg>
  );
};

NotesMultiple.displayName = 'NotesMultiple';
