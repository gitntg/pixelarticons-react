import React from 'react';

export interface ChessProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Chess = ({size = 24, className = "", ...props}: ChessProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 2h20v20H2V2zm2 2v4h4v4H4v4h4v4h4v-4h4v4h4v-4h-4v-4h4V8h-4V4h-4v4H8V4H4zm8 8H8v4h4v-4zm0-4v4h4V8h-4z" fill="currentColor"/>
    </svg>
  );
};

Chess.displayName = 'Chess';
