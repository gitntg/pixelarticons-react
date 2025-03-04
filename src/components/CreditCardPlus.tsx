import React from 'react';

export interface CreditCardPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CreditCardPlus = ({size = 24, className = "", ...props}: CreditCardPlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 4h18v2H4v2h16v4H4v6h10v2H2V4zm20 0h-2v8h2V4zm-4 10h2v2h2v2h-2v2h-2v-2h-2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

CreditCardPlus.displayName = 'CreditCardPlus';
