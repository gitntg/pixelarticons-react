import React from 'react';

export interface LayoutSidebarLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutSidebarLeft = ({size = 24, className = "", ...props}: LayoutSidebarLeftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 5h20v14H2V5zm2 2v10h2V7H4zm4 0v10h12V7H8z" fill="currentColor"/>
    </svg>
  );
};

LayoutSidebarLeft.displayName = 'LayoutSidebarLeft';
