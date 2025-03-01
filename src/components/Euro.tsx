import React from 'react';

export interface EuroProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Euro = ({size = 24, className = "", ...props}: EuroProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M9 4h10v2H9v3h7v2H9v2h7v2H9v3h10v2H7v-5H5v-2h2v-2H5V9h2V4h2z" fill="currentColor"/>
    </svg>
  );
};

Euro.displayName = 'Euro';
