import React from 'react';

export interface RoundedCornerProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const RoundedCorner = ({size = 24, className = "", ...props}: RoundedCornerProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h2v2H3V3zm0 4h2v2H3V7zm2 4H3v2h2v-2zm-2 4h2v2H3v-2zm2 4H3v2h2v-2zm2 0h2v2H7v-2zm6 0h-2v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2zm-2-4h2v2h-2v-2zM17 5h-2V3h-4v2h4v2h2v2h2v4h2V9h-2V7h-2V5zM7 3h2v2H7V3z" fill="currentColor"/>
    </svg>
  );
};

RoundedCorner.displayName = 'RoundedCorner';
