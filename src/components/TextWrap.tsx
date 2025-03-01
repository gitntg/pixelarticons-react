import React from 'react';

export interface TextWrapProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TextWrap = ({size = 24, className = "", ...props}: TextWrapProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M19 5H3v2h16v6h-6v-2h2V9h-2v2h-2v2H9v2h2v2h2v2h2v-2h-2v-2h6v-2h2V7h-2V5zM7 13H3v2h4v-2zM3 9h6v2H3V9z" fill="currentColor"/>
    </svg>
  );
};

TextWrap.displayName = 'TextWrap';
