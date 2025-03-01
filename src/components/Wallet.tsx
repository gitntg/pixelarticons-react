import React from 'react';

export interface WalletProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Wallet = ({size = 24, className = "", ...props}: WalletProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 3H2v18h18v-4h2V7h-2V3h-2zm0 14v2H4V5h14v2h-8v10h8zm2-2h-8V9h8v6zm-4-4h-2v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

Wallet.displayName = 'Wallet';
