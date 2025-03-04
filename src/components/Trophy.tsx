import React from 'react';

export interface TrophyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Trophy = ({size = 24, className = "", ...props}: TrophyProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 3H6v2H2v10h6V5h8v10h6V5h-4V3h-2zm4 4v6h-2V7h2zM6 13H4V7h2v6zm12 2H6v2h12v-2zm-7 2h2v2h3v2H8v-2h3v-2z" fill="currentColor"/>
    </svg>
  );
};

Trophy.displayName = 'Trophy';
