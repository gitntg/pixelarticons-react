import React from 'react';

export interface CardPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CardPlus = ({size = 24, className = "", ...props}: CardPlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M22 4H2v16h10v-2H4V6h16v4h2V4zm-3 13h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" fill="currentColor"/>
    </svg>
  );
};

CardPlus.displayName = 'CardPlus';
