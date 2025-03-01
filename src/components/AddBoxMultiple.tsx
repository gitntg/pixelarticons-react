import React from 'react';

export interface AddBoxMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AddBoxMultiple = ({size = 24, className = "", ...props}: AddBoxMultipleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h14v14H3V3zm12 12V5H5v10h10zm-8 6v-2h12V7h2v14H7zm4-12h2v2h-2v2H9v-2H7V9h2V7h2v2z" fill="currentColor"/>
    </svg>
  );
};

AddBoxMultiple.displayName = 'AddBoxMultiple';
