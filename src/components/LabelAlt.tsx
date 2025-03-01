import React from 'react';

export interface LabelAltProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LabelAlt = ({size = 24, className = "", ...props}: LabelAltProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 5H2v14h14v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5zm0 2v2h2v2h2v2h-2v2h-2v2H4V7h12z" fill="currentColor"/>
    </svg>
  );
};

LabelAlt.displayName = 'LabelAlt';
