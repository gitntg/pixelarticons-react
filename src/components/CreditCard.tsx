import React from 'react';

export interface CreditCardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CreditCard = ({size = 24, className = "", ...props}: CreditCardProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4h16v2H4v2h16v4H4v6h16v2H2V4h2zm18 0h-2v16h2V4z" fill="currentColor"/>
    </svg>
  );
};

CreditCard.displayName = 'CreditCard';
