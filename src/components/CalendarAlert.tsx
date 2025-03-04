import React from 'react';

export interface CalendarAlertProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CalendarAlert = ({size = 24, className = "", ...props}: CalendarAlertProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M7 5V4H5v2H3v14h14V6h-2V4h-2v2H7V5zm-2 5V8h10v2H5zm0 2h10v6H5v-6zm16-3V8h-2v6h2V9zm0 6h-2v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

CalendarAlert.displayName = 'CalendarAlert';
