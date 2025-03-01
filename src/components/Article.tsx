import React from 'react';

export interface ArticleProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Article = ({size = 24, className = "", ...props}: ArticleProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-2 2H7v2h10V7zM7 11h10v2H7v-2zm7 4H7v2h7v-2z" fill="currentColor"/>
    </svg>
  );
};

Article.displayName = 'Article';
