import React from 'react';

export interface HumanRunProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HumanRun = ({size = 24, className = "", ...props}: HumanRunProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 3H8v2H6v2h2V5h2v2h2v2h-2v2H8v2H6v2H4v-2H2v2h2v2h2v-2h4v2h2v2h-2v2h2v-2h2v-2h-2v-4h2v-2h2v2h2v2h2v-2h2v-2h-2v2h-2v-2h-2V9h2V5h-4v2h-2V5h-2V3z" fill="currentColor"/>
    </svg>
  );
};

HumanRun.displayName = 'HumanRun';
