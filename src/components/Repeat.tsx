import React from 'react';

export interface RepeatProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Repeat = ({size = 24, className = "", ...props}: RepeatProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M11 1H9v2h2v2H5v2H3v10h2v2h2v-2H5V7h6v2H9v2h2V9h2V7h2V5h-2V3h-2V1zm8 4h-2v2h2v10h-6v-2h2v-2h-2v2h-2v2H9v2h2v2h2v2h2v-2h-2v-2h6v-2h2V7h-2V5z" fill="currentColor"/>
    </svg>
  );
};

Repeat.displayName = 'Repeat';
