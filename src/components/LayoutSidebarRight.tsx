import React from 'react';

export interface LayoutSidebarRightProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutSidebarRight = ({size = 24, className = "", ...props}: LayoutSidebarRightProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M22 5H2v14h20V5zm-2 2v10h-2V7h2zm-4 0v10H4V7h12z" fill="currentColor"/>
    </svg>
  );
};

LayoutSidebarRight.displayName = 'LayoutSidebarRight';
