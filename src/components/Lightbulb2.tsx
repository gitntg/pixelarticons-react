import React from 'react';

export interface Lightbulb2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Lightbulb2 = ({size = 24, className = "", ...props}: Lightbulb2Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 2h8v2H8V2ZM6 6V4h2v2H6Zm0 6H4V6h2v6Zm2 2H6v-2h2v2Zm2 0H8v4h8v-4h2v-2h2V6h-2V4h-2v2h2v6h-2v2h-2v2h-4v-2Zm2-2v2h-2v-2h2Zm0-2h2v2h-2v-2Zm0-2v2h-2V8h2Zm0 0V6h2v2h-2Zm4 14v-2H8v2h8Z" />
    </svg>
  );
};

Lightbulb2.displayName = 'Lightbulb2';
