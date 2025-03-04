import React from 'react';

export interface GitMergeProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const GitMerge = ({size = 24, className = "", ...props}: GitMergeProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 2H2v8h3v12h2V10h3v2h2v2h2v8h8v-8h-8v-2h-2v-2h-2V2zM4 8V4h4v4H4zm12 12v-4h4v4h-4z" fill="currentColor"/>
    </svg>
  );
};

GitMerge.displayName = 'GitMerge';
