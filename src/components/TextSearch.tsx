import React from 'react';

export interface TextSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TextSearch = ({size = 24, className = "", ...props}: TextSearchProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 4H4v2h16V4zm0 4H4v2h16V8zm-8 4H4v2h8v-2zm8 0h-6v6h6v2h2v-2h-2v-6zm-4 4v-2h2v2h-2zm-4 0H4v2h8v-2z" fill="currentColor"/>
    </svg>
  );
};

TextSearch.displayName = 'TextSearch';
