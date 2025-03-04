import React from 'react';

export interface FlipToFrontProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const FlipToFront = ({size = 24, className = "", ...props}: FlipToFrontProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M21 3H7v14h14V3zm-2 12H9V5h10v10zM5 7H3v2h2V7zm-2 4h2v2H3v-2zm2 4H3v2h2v-2zm-2 4h2v2H3v-2zm6 0H7v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

FlipToFront.displayName = 'FlipToFront';
