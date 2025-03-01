import React from 'react';

export interface ViewListProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ViewList = ({size = 24, className = "", ...props}: ViewListProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 5h20v14H2V5zm2 2v2h16V7H4zm16 4H4v2h16v-2zm0 4H4v2h16v-2z" fill="currentColor"/>
    </svg>
  );
};

ViewList.displayName = 'ViewList';
