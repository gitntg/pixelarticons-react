import React from 'react';

export interface TrackChangesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TrackChanges = ({size = 24, className = "", ...props}: TrackChangesProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 2H2v20h20V4h-2v16H4V4h7v2H6v12h12V8h-2v8H8V8h3v2h-1v4h4v-4h-1V2h-2z" fill="currentColor"/>
    </svg>
  );
};

TrackChanges.displayName = 'TrackChanges';
