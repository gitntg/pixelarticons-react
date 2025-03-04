import React from 'react';

export interface BriefcaseUploadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const BriefcaseUpload = ({size = 24, className = "", ...props}: BriefcaseUploadProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 3h8v4h6v14h-5v-2h3V9H4v10h3v2H2V7h6V3zm6 2h-4v2h4V5zm-3 16h2v-6h2v2h2v-2h-2v-2h-2v-2h-2v2H9v2H7v2h2v-2h2v6z" fill="currentColor"/>
    </svg>
  );
};

BriefcaseUpload.displayName = 'BriefcaseUpload';
