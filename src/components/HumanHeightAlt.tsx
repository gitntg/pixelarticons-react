import React from 'react';

export interface HumanHeightAltProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const HumanHeightAlt = ({size = 24, className = "", ...props}: HumanHeightAltProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2h4v4H4V2zM1 7h10v9H9v6H7v-6H5v6H3v-6H1V7zm18-5h-2v2h-2v2h-2v2h2V6h2v12h-2v-2h-2v2h2v2h2v2h2v-2h2v-2h2v-2h-2v2h-2V6h2v2h2V6h-2V4h-2V2z" fill="currentColor"/>
    </svg>
  );
};

HumanHeightAlt.displayName = 'HumanHeightAlt';
