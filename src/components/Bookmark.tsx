import React from 'react';

export interface BookmarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Bookmark = ({size = 24, className = "", ...props}: BookmarkProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 2H6v2h12v16h-2v-2h-2v-2h-4v2H8v2H6V2H4v20h4v-2h2v-2h4v2h2v2h4V2h-2z" fill="currentColor"/>
    </svg>
  );
};

Bookmark.displayName = 'Bookmark';
