import React from 'react';

export interface CalendarSortDescendingProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CalendarSortDescending = ({size = 24, className = "", ...props}: CalendarSortDescendingProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 5H8v2H4V5H2v2H0v12h12V7h-2V5zM2 9h8v2H2V9zm0 8v-4h8v4H2zm18 2h-2v-8h-2V9h2V7h2v2h2v2h-2v8zm2-8v2h2v-2h-2zm-6 0v2h-2v-2h2z" fill="currentColor"/>
    </svg>
  );
};

CalendarSortDescending.displayName = 'CalendarSortDescending';
