import React from 'react';

export interface ViewColProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ViewCol = ({size = 24, className = "", ...props}: ViewColProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 5h20v14H2V5zm2 2v10h4V7H4zm6 0v10h4V7h-4zm6 0v10h4V7h-4z" fill="currentColor"/>
    </svg>
  );
};

ViewCol.displayName = 'ViewCol';
