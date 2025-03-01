import React from 'react';

export interface MenuProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Menu = ({size = 24, className = "", ...props}: MenuProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 5H4v2h16v-2z" fill="currentColor"/>
    </svg>
  );
};

Menu.displayName = 'Menu';
