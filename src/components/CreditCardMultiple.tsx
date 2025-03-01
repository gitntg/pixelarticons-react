import React from 'react';

export interface CreditCardMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CreditCardMultiple = ({size = 24, className = "", ...props}: CreditCardMultipleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M1 3h16v2H3v2h14v4H3v4h14v2H1V3zm18 0h-2v14h2V3zM5 19h16v2H5v-2zM23 7h-2v14h2V7z" fill="currentColor"/>
    </svg>
  );
};

CreditCardMultiple.displayName = 'CreditCardMultiple';
