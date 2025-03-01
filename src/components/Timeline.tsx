import React from 'react';

export interface TimelineProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Timeline = ({size = 24, className = "", ...props}: TimelineProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M7 7h4v4H7V7zm-2 6v-2h2v2H5zm0 0v4H1v-4h4zm8 0h-2v-2h2v2zm4 0h-4v4h4v-4zm2-2v2h-2v-2h2zm0 0h4V7h-4v4z" fill="currentColor"/>
    </svg>
  );
};

Timeline.displayName = 'Timeline';
