import React from 'react';

export interface TabProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Tab = ({size = 24, className = "", ...props}: TabProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 3h20v18H2V3zm2 2v14h16V9h-8V5H4z" fill="currentColor"/>
    </svg>
  );
};

Tab.displayName = 'Tab';
