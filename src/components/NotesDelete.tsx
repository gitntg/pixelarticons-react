import React from 'react';

export interface NotesDeleteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NotesDelete = ({size = 24, className = "", ...props}: NotesDeleteProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M19 2H3v20h10v-2H5V4h14v10h2V2h-2zm-2 4H7v2h10V6zM7 10h10v2H7v-2zm6 4H7v2h6v-2zm6 4h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2z" fill="currentColor"/>
    </svg>
  );
};

NotesDelete.displayName = 'NotesDelete';
