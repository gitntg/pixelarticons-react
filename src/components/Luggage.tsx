import React from 'react';

export interface LuggageProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Luggage = ({size = 24, className = "", ...props}: LuggageProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M9 2h6v4h4v14h-2v2h-2v-2H9v2H7v-2H5V6h4V2zm2 4h2V4h-2v2zM7 18h10V8H7v10zm4-8v6H9v-6h2zm4 0v6h-2v-6h2z" fill="currentColor"/>
    </svg>
  );
};

Luggage.displayName = 'Luggage';
