import React from 'react';

export interface DebugPauseProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DebugPause = ({size = 24, className = "", ...props}: DebugPauseProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 2H6v2h2v2H6v3H4V7H2v2h2v2h2v2H2v2h4v2H4v2H2v2h2v-2h2v3h8v-2H8V8h8v6h2v-3h2V9h2V7h-2v2h-2V6h-2V4h2V2h-2v2h-2v2h-4V4H8V2Zm6 9h-4v2h4v-2Zm-4 4h4v2h-4v-2Zm6 1h2v6h-2v-6Zm6 0h-2v6h2v-6Z"/>
    </svg>
  );
};

DebugPause.displayName = 'DebugPause';
