import React from 'react';

export interface NoteMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NoteMultiple = ({size = 24, className = "", ...props}: NoteMultipleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M21 6H7v16h8v-2h2v-2h-2v-2h2v2h2v-2h2V6zM9 20V8h10v6h-6v6H9zm-6-2h2V4h12V2H3v16z" fill="currentColor"/>
    </svg>
  );
};

NoteMultiple.displayName = 'NoteMultiple';
