import React from 'react';

export interface DebugPlayProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DebugPlay = ({size = 24, className = "", ...props}: DebugPlayProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 2h2v2H6V2Zm10 2h-2v2h-4V4H8v2H6v3H4V7H2v2h2v2h2v2H2v2h4v2H4v2H2v2h2v-2h2v3h8v-2H8V8h8v3h4V9h2V7h-2v2h-2V6h-2V4Zm0 0V2h2v2h-2Zm-6 7h4v2h-4v-2Zm4 4h-4v2h4v-2Zm4-2h-2v10h2v-2h2v-2h2v-2h-2v-2h-2v-2Z"/>
    </svg>
  );
};

DebugPlay.displayName = 'DebugPlay';
