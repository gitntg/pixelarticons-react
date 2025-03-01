import React from 'react';

export interface ListBoxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ListBox = ({size = 24, className = "", ...props}: ListBoxProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 3h20v18H2V3zm18 16V5H4v14h16zM8 7H6v2h2V7zm2 0h8v2h-8V7zm-2 4H6v2h2v-2zm2 0h8v2h-8v-2zm-2 4H6v2h2v-2zm2 0h8v2h-8v-2z" fill="currentColor"/>
    </svg>
  );
};

ListBox.displayName = 'ListBox';
