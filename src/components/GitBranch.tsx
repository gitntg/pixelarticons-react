import React from 'react';

export interface GitBranchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const GitBranch = ({size = 24, className = "", ...props}: GitBranchProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 2h2v12h3v3h7v-7h-3V2h8v8h-3v9h-9v3H2v-8h3V2zm15 6V4h-4v4h4zM8 19v-3H4v4h4v-1z" fill="currentColor"/>
    </svg>
  );
};

GitBranch.displayName = 'GitBranch';
