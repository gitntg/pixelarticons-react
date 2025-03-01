import React from 'react';

export interface TournamentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Tournament = ({size = 24, className = "", ...props}: TournamentProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M9 2H2v2h5v4H2v2h7V7h5v10H9v-3H2v2h5v4H2v2h7v-3h7v-6h6v-2h-6V5H9V2z" fill="currentColor"/>
    </svg>
  );
};

Tournament.displayName = 'Tournament';
