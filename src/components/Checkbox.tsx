import React from 'react';

export interface CheckboxProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Checkbox = ({size = 24, className = "", ...props}: CheckboxProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3H3v18h18V3H5zm0 2h14v14H5V5zm4 7H7v2h2v2h2v-2h2v-2h2v-2h2V8h-2v2h-2v2h-2v2H9v-2z" fill="currentColor"/>
    </svg>
  );
};

Checkbox.displayName = 'Checkbox';
