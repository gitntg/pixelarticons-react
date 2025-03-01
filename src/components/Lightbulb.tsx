import React from 'react';

export interface LightbulbProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Lightbulb = ({size = 24, className = "", ...props}: LightbulbProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 2h8v2H8V2ZM6 6V4h2v2H6Zm0 6H4V6h2v6Zm2 2H6v-2h2v2Zm8 0v4H8v-4h2v2h4v-2h2Zm2-2v2h-2v-2h2Zm0-6h2v6h-2V6Zm0 0V4h-2v2h2Zm-2 14H8v2h8v-2Z" />
    </svg>
  );
};

Lightbulb.displayName = 'Lightbulb';
