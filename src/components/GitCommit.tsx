import React from 'react';

export interface GitCommitProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const GitCommit = ({size = 24, className = "", ...props}: GitCommitProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M7 7h10v4h5v2h-5v4H7v-4H2v-2h5V7zm2 2v6h6V9H9z" fill="currentColor"/>
    </svg>
  );
};

GitCommit.displayName = 'GitCommit';
