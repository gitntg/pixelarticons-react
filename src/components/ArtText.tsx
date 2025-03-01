import React from 'react';

export interface ArtTextProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArtText = ({size = 24, className = "", ...props}: ArtTextProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 7h10v10H2V7zm8 8V9H4v6h6zm12-8h-8v2h8V7zm-8 4h8v2h-8v-2zm8 4h-8v2h8v-2z" fill="currentColor"/>
    </svg>
  );
};

ArtText.displayName = 'ArtText';
