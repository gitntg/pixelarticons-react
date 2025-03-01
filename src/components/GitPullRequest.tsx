import React from 'react';

export interface GitPullRequestProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const GitPullRequest = ({size = 24, className = "", ...props}: GitPullRequestProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 2h8v8H7v12H5V10H2V2zm2 2v4h4V4H4zm8 1h7.09v9H22v8h-8v-8h3.09V7H12V5zm4 11v4h4v-4h-4z" fill="currentColor"/>
    </svg>
  );
};

GitPullRequest.displayName = 'GitPullRequest';
