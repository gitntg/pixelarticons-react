import React from 'react';

export interface CreditCardMinusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CreditCardMinus = ({size = 24, className = "", ...props}: CreditCardMinusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 4H2v16h12v-2H4v-6h16V8H4V6h16V4zm0 0h2v8h-2V4zm2 12h-6v2h6v-2z" fill="currentColor"/>
    </svg>
  );
};

CreditCardMinus.displayName = 'CreditCardMinus';
