import React from 'react';

export interface CalendarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Calendar = ({size = 24, className = "", ...props}: CalendarProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M15 2h2v2h4v18H3V4h4V2h2v2h6V2zM5 8h14V6H5v2zm0 2v10h14V10H5z" fill="currentColor"/>
    </svg>
  );
};

Calendar.displayName = 'Calendar';
