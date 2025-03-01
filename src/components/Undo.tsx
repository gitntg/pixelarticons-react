import React from 'react';

export interface UndoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Undo = ({size = 24, className = "", ...props}: UndoProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 4h2v2H8V4zm10 6V8H8V6H6v2H4v2h2v2h2v2h2v-2H8v-2h10zm0 8v-8h2v8h-2zm0 0v2h-6v-2h6z" fill="currentColor"/>
    </svg>
  );
};

Undo.displayName = 'Undo';
