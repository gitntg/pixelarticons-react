import React from 'react';

export interface AttachmentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Attachment = ({size = 24, className = "", ...props}: AttachmentProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M7 5v14H5V3h14v18H9V7h6v10h-2V9h-2v10h6V5H7z" fill="currentColor"/>
    </svg>
  );
};

Attachment.displayName = 'Attachment';
