import React from 'react';

export interface ContactDeleteProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ContactDelete = ({size = 24, className = "", ...props}: ContactDeleteProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M22 3H0v18h16v-2H2V5h20v10h2V3h-2zM6 7h4v4H6V7zm0 8H4v2h2v-2zm4 0H6v-2h4v2zm0 0v2h2v-2h-2zm4-8h6v2h-6V7zm6 4h-6v2h6v-2zm-6 4h2v2h-2v-2zm8 4h-2v-2h-2v2h2v2h-2v2h2v-2h2v2h2v-2h-2v-2zm0 0h2v-2h-2v2z" fill="currentColor"/>
    </svg>
  );
};

ContactDelete.displayName = 'ContactDelete';
