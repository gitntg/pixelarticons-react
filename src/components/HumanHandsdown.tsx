import React from 'react';

export interface HumanHandsdownProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HumanHandsdown = ({size = 24, className = "", ...props}: HumanHandsdownProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 2h4v4h-4V2zM7 7h10v2h-2v13h-2v-6h-2v6H9V9H7V7zm-2 4h2V9H5v2zm0 0v2H3v-2h2zm14 0h-2V9h2v2zm0 0h2v2h-2v-2z" fill="currentColor"/>
    </svg>
  );
};

HumanHandsdown.displayName = 'HumanHandsdown';
