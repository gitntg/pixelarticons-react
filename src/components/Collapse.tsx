import React from 'react';

export interface CollapseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Collapse = ({size = 24, className = "", ...props}: CollapseProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M17 3h-2v2h-2v2h-2V5H9V3H7v2h2v2h2v2h2V7h2V5h2V3zM4 13h16v-2H4v2zm9 4h-2v-2h2v2zm2 2h-2v-2h2v2zm0 0h2v2h-2v-2zm-6 0h2v-2H9v2zm0 0H7v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

Collapse.displayName = 'Collapse';
