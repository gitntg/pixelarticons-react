import React from 'react';

export interface AnchorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Anchor = ({size = 24, className = "", ...props}: AnchorProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M14 3h-4v2H8v4h2v2h1v8H6v-4h2v-2H4v6h2v2h12v-2h2v-6h-4v2h2v4h-5v-8h1V9h2V5h-2V3zm0 2v4h-4V5h4z" fill="currentColor"/>
    </svg>
  );
};

Anchor.displayName = 'Anchor';
