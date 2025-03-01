import React from 'react';

export interface CommentProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Comment = ({size = 24, className = "", ...props}: CommentProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M22 2H2v14h2V4h16v12h-8v2h-2v2H8v-4H2v2h4v4h4v-2h2v-2h10V2z" fill="currentColor"/>
    </svg>
  );
};

Comment.displayName = 'Comment';
