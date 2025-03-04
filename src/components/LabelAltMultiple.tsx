import React from 'react';

export interface LabelAltMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LabelAltMultiple = ({size = 24, className = "", ...props}: LabelAltMultipleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 5H6v10h12v-2h2v-2h2V9h-2V7h-2V5H8zm10 2v2h2v2h-2v2H8V7h10zM4 9H2v10h12v-2H4V9z" fill="currentColor"/>
    </svg>
  );
};

LabelAltMultiple.displayName = 'LabelAltMultiple';
