import React from 'react';

export interface ListProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const List = ({size = 24, className = "", ...props}: ListProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z" fill="currentColor"/>
    </svg>
  );
};

List.displayName = 'List';
