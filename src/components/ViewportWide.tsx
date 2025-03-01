import React from 'react';

export interface ViewportWideProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ViewportWide = ({size = 24, className = "", ...props}: ViewportWideProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2H2v4h2V4h16v2h2V2H4zM2 20v-2h2v2h16v-2h2v4H2v-2zm16-9h-5v2h5v2h-2v2h2v-2h2v-2h2v-2h-2V9h-2V7h-2v2h2v2zm-7 0H6V9h2V7H6v2H4v2H2v2h2v2h2v2h2v-2H6v-2h5v-2z" fill="currentColor"/>
    </svg>
  );
};

ViewportWide.displayName = 'ViewportWide';
