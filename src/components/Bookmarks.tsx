import React from 'react';

export interface BookmarksProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Bookmarks = ({size = 24, className = "", ...props}: BookmarksProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M21 18V2H7v2h12v14h2zM5 6H3v16h4v-2h2v-2h2v2h2v2h4V6H5zm8 14v-2h-2v-2H9v2H7v2H5V8h10v12h-2z" fill="currentColor"/>
    </svg>
  );
};

Bookmarks.displayName = 'Bookmarks';
