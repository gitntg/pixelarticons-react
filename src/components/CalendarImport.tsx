import React from 'react';

export interface CalendarImportProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CalendarImport = ({size = 24, className = "", ...props}: CalendarImportProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 2h-2v2H9V2H7v2H3v18h4v-2H5V10h14v10h-2v2h4V4h-4V2zM7 6h12v2H5V6h2zm6 16h-2v-6H9v-2h2v-2h2v2h2v2h-2v6zm2-6v2h2v-2h-2zm-6 0v2H7v-2h2z" fill="currentColor"/>
    </svg>
  );
};

CalendarImport.displayName = 'CalendarImport';
