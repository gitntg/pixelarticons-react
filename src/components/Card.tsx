import React from 'react';

export interface CardProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Card = ({size = 24, className = "", ...props}: CardProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 4h20v16H2V4zm18 14V6H4v12h16z" fill="currentColor"/>
    </svg>
  );
};

Card.displayName = 'Card';
