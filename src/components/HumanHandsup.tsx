import React from 'react';

export interface HumanHandsupProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HumanHandsup = ({size = 24, className = "", ...props}: HumanHandsupProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 2h4v4h-4V2zM7 7h10v2h-2v13h-2v-6h-2v6H9V9H7V7zM5 5v2h2V5H5zm0 0H3V3h2v2zm14 0v2h-2V5h2zm0 0V3h2v2h-2z" fill="currentColor"/>
    </svg>
  );
};

HumanHandsup.displayName = 'HumanHandsup';
