import React from 'react';

export interface StoreProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Store = ({size = 24, className = "", ...props}: StoreProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 3h16v2H4V3zm0 4h18v8h-2v6h-2v-6h-4v6H4v-6H2V7h2zm8 12v-4H6v4h6zm0-6h8V9H4v4h8z" fill="currentColor"/>
    </svg>
  );
};

Store.displayName = 'Store';
