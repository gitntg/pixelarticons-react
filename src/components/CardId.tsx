import React from 'react';

export interface CardIdProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CardId = ({size = 24, className = "", ...props}: CardIdProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 4h20v16H2V4zm2 2v4h16V6H4zm16 6H10v2h10v-2zm0 4h-4v2h4v-2zm-6 2v-2H4v2h10zM4 14h4v-2H4v2z" fill="currentColor"/>
    </svg>
  );
};

CardId.displayName = 'CardId';
