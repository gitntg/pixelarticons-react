import React from 'react';

export interface WindProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Wind = ({size = 24, className = "", ...props}: WindProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M12 3H8v2h4v2H2v2h12V3h-2zm10 8V7h-6v2h4v2H2v2h20v-2zM2 17v-2h14v6h-6v-2h4v-2H2z" fill="currentColor"/>
    </svg>
  );
};

Wind.displayName = 'Wind';
