import React from 'react';

export interface CalendarRemoveProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CalendarRemove = ({size = 24, className = "", ...props}: CalendarRemoveProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4V2zM7 6h12v2H5V6h2zM5 20V10h14v10H5zm6-4H9v2h2v-2zm0-2v-2H9v2h2zm2 0h-2v2h2v2h2v-2h-2v-2zm0 0v-2h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

CalendarRemove.displayName = 'CalendarRemove';
