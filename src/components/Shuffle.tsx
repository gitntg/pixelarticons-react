import React from 'react';

export interface ShuffleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Shuffle = ({size = 24, className = "", ...props}: ShuffleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 5h-2v2h2v2h-6v2h-2v6H2v2h8v-2h2v-6h6v2h-2v2h2v-2h2v-2h2V9h-2V7h-2V5zM2 9h6v2H2V9zm20 10v-2h-8v2h8z" fill="currentColor"/>
    </svg>
  );
};

Shuffle.displayName = 'Shuffle';
