import React from 'react';

export interface CalendarWeekBeginProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CalendarWeekBegin = ({size = 24, className = "", ...props}: CalendarWeekBeginProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4V2zM7 6h12v2H5V6h2zM5 20V10h14v10H5zm4-8H7v6h2v-6z" fill="currentColor"/>
    </svg>
  );
};

CalendarWeekBegin.displayName = 'CalendarWeekBegin';
