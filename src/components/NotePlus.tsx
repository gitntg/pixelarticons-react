import React from 'react';

export interface NotePlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const NotePlus = ({size = 24, className = "", ...props}: NotePlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M7 1H5v3H2v2h3v3h2V6h3V4H7V1zm12 1h-7v2h7v10h-6v6H5v-9H3v11h12v-2h2v-2h2v-2h2V2h-2zm-2 16h-2v-2h2v2z" fill="currentColor"/>
    </svg>
  );
};

NotePlus.displayName = 'NotePlus';
