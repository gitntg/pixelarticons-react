import React from 'react';

export interface RedoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Redo = ({size = 24, className = "", ...props}: RedoProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 4h-2v2h2v2H6v2H4v8h2v2h6v-2H6v-8h10v2h-2v2h2v-2h2v-2h2V8h-2V6h-2V4z" fill="currentColor"/>
    </svg>
  );
};

Redo.displayName = 'Redo';
