import React from 'react';

export interface AnimationProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Animation = ({size = 24, className = "", ...props}: AnimationProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2H2v12h2V4h10V2H4zm2 4h12v2H8v10H6V6zm4 4h12v12H10V10zm10 10v-8h-8v8h8z" fill="currentColor"/>
    </svg>
  );
};

Animation.displayName = 'Animation';
