import React from 'react';

export interface RadioHandheldProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const RadioHandheld = ({size = 24, className = "", ...props}: RadioHandheldProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M9 2v5h8v15H7V2h2zm0 7v4h6V9H9zm6 6H9v5h6v-5z" fill="currentColor"/>
    </svg>
  );
};

RadioHandheld.displayName = 'RadioHandheld';
