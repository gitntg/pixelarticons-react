import React from 'react';

export interface GiftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Gift = ({size = 24, className = "", ...props}: GiftProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M19 12v8h-7m7-8h2V8h-3m1 4H5m13-4V4h-6m6 4H6m0 0V4h6M6 8H3v4h2m0 0v8h7m0 0V4" stroke="currentColor" stroke-width="2"/>
    </svg>
  );
};

Gift.displayName = 'Gift';
