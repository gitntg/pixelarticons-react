import React from 'react';

export interface BulletlistProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Bulletlist = ({size = 24, className = "", ...props}: BulletlistProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 11V5h6v6H2zm4-2V7H4v2h2zm16-4H10v2h12V5zm0 4H10v2h12V9zm-12 4h12v2H10v-2zm12 4H10v2h12v-2zM2 13v6h6v-6H2zm4 2v2H4v-2h2z" fill="currentColor"/>
    </svg>
  );
};

Bulletlist.displayName = 'Bulletlist';
