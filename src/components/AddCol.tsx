import React from 'react';

export interface AddColProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const AddCol = ({size = 24, className = "", ...props}: AddColProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 2h10v20H2v-2h8v-4H2v-2h8v-4H2V8h8V4H2V2zm17 9h3v2h-3v3h-2v-3h-3v-2h3V8h2v3z" fill="currentColor"/>
    </svg>
  );
};

AddCol.displayName = 'AddCol';
