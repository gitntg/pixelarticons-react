import React from 'react';

export interface CalendarArrowLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CalendarArrowLeft = ({size = 24, className = "", ...props}: CalendarArrowLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 2h-2v2H9V2H7v2H3v8h2v-2h14v10h-8v2h10V4h-4V2zm2 6H5V6h14v2zm-6 8H7v-2h2v-2H7v2H5v2H3v2h2v2h2v2h2v-2H7v-2h6v-2z" fill="currentColor"/>
    </svg>
  );
};

CalendarArrowLeft.displayName = 'CalendarArrowLeft';
