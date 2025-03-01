import React from 'react';

export interface CalendarArrowRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CalendarArrowRight = ({size = 24, className = "", ...props}: CalendarArrowRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 2h-2v2H9V2H7v2H3v18h10v-2H5V10h14v2h2V4h-4V2zM7 6h12v2H5V6h2zm14 10h-2v-2h-2v-2h-2v2h2v2h-6v2h6v2h-2v2h2v-2h2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

CalendarArrowRight.displayName = 'CalendarArrowRight';
