import React from 'react';

export interface SortProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Sort = ({size = 24, className = "", ...props}: SortProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 20H6V8H4V6h2V4h2v2h2v2H8v12zm2-12v2h2V8h-2zM4 8v2H2V8h2zm14-4h-2v12h-2v-2h-2v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2V4z" fill="currentColor"/>
    </svg>
  );
};

Sort.displayName = 'Sort';
