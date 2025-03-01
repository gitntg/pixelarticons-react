import React from 'react';

export interface MissedCallProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MissedCall = ({size = 24, className = "", ...props}: MissedCallProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 6h-4v2h2v2h-2v2h-2v2h-2v2h-2v-2H8v-2H6v-2H4V8H2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v2h2V6h-2z" fill="currentColor"/>
    </svg>
  );
};

MissedCall.displayName = 'MissedCall';
