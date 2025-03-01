import React from 'react';

export interface ArrowBarDownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArrowBarDown = ({size = 24, className = "", ...props}: ArrowBarDownProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 4h2v8h2v2h-2v2h-2v-2H9v-2h2V4zm-2 8H7v-2h2v2zm6 0v-2h2v2h-2zM4 18h16v2H4v-2z" fill="currentColor"/>
    </svg>
  );
};

ArrowBarDown.displayName = 'ArrowBarDown';
