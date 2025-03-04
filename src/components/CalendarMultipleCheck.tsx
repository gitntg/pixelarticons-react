import React from 'react';

export interface CalendarMultipleCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CalendarMultipleCheck = ({size = 24, className = "", ...props}: CalendarMultipleCheckProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 2h2v2h4v10h-2v-4H7v6h6v2H5V4h4V2h2v2h6V2zm-6 4H7v2h14V6H11zm2 14v2H1V8h2v12h10zm2-2h2v2h-2v-2zm4 2v2h-2v-2h2zm2-2h-2v2h2v-2zm0 0v-2h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

CalendarMultipleCheck.displayName = 'CalendarMultipleCheck';
