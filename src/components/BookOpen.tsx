import React from 'react';

export interface BookOpenProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BookOpen = ({size = 24, className = "", ...props}: BookOpenProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h8v2H3v12h8V5h2v12h8V5h-8V3h10v16H13v2h-2v-2H1V3h2zm16 7h-4v2h4v-2zm-4-3h4v2h-4V7zm2 6h-2v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

BookOpen.displayName = 'BookOpen';
