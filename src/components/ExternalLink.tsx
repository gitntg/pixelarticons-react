import React from 'react';

export interface ExternalLinkProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ExternalLink = ({size = 24, className = "", ...props}: ExternalLinkProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M21 11V3h-8v2h4v2h-2v2h-2v2h-2v2H9v2h2v-2h2v-2h2V9h2V7h2v4h2zM11 5H3v16h16v-8h-2v6H5V7h6V5z" fill="currentColor"/>
    </svg>
  );
};

ExternalLink.displayName = 'ExternalLink';
