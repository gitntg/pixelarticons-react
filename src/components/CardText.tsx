import React from 'react';

export interface CardTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CardText = ({size = 24, className = "", ...props}: CardTextProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 4H2v16h20V4H4zm0 2h16v12H4V6zm2 2h12v2H6V8zm0 4h10v2H6v-2z" fill="currentColor"/>
    </svg>
  );
};

CardText.displayName = 'CardText';
