import React from 'react';

export interface CalendarPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CalendarPlus = ({size = 24, className = "", ...props}: CalendarPlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM9 6H5v2h14V6H9zm-4 4v10h14V10H5zm6 2h2v2h2v2h-2v2h-2v-2H9v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

CalendarPlus.displayName = 'CalendarPlus';
