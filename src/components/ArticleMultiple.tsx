import React from 'react';

export interface ArticleMultipleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ArticleMultiple = ({size = 24, className = "", ...props}: ArticleMultipleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 1H1v18h18V1H3zm14 2v14H3V3h14zm4 18H5v2h18V5h-2v16zM15 5H5v2h10V5zM5 9h10v2H5V9zm7 4H5v2h7v-2z" fill="currentColor"/>
    </svg>
  );
};

ArticleMultiple.displayName = 'ArticleMultiple';
