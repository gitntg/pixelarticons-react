import React from 'react';

export interface AvatarProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Avatar = ({size = 24, className = "", ...props}: AvatarProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM14 7h-4v4h4V7zm1 6H9v2H7v2h2v-2h6v2h2v-2h-2v-2z" fill="currentColor"/>
    </svg>
  );
};

Avatar.displayName = 'Avatar';
