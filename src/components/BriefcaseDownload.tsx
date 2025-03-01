import React from 'react';

export interface BriefcaseDownloadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BriefcaseDownload = ({size = 24, className = "", ...props}: BriefcaseDownloadProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 3h8v4h6v14h-5v-2h3V9H4v10h3v2H2V7h6V3zm6 2h-4v2h4V5zm-3 6h2v6h2v2h-2v2h-2v-2H9v-2h2v-6zm-2 6H7v-2h2v2zm6 0v-2h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

BriefcaseDownload.displayName = 'BriefcaseDownload';
