import React from 'react';

export interface DropAreaProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DropArea = ({size = 24, className = "", ...props}: DropAreaProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3H3v2h2V3zm2 0h2v2H7V3zm6 0h-2v2h2V3zm2 0h2v2h-2V3zm4 0h2v2h-2V3zM3 7h2v2H3V7zm2 4H3v2h2v-2zm-2 4h2v2H3v-2zm2 4H3v2h2v-2zm2 0h2v2H7v-2zm6 0h-2v2h2v-2zm6-8h2v2h-2v-2zm2-4h-2v2h2V7zm-6 10v-2h6v2h-2v2h-2v2h-2v-4zm4 2v2h2v-2h-2z" fill="currentColor"/>
    </svg>
  );
};

DropArea.displayName = 'DropArea';
