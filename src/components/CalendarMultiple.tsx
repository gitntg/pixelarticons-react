import React from 'react';

export interface CalendarMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CalendarMultiple = ({size = 24, className = "", ...props}: CalendarMultipleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 2h2v2h4v14H5V4h4V2h2v2h6V2zm-6 4H7v2h14V6H11zm-4 4v6h14v-6H7zM3 20h16v2H1V8h2v12z" fill="currentColor"/>
    </svg>
  );
};

CalendarMultiple.displayName = 'CalendarMultiple';
