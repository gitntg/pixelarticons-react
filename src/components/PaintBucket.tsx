import React from 'react';

export interface PaintBucketProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const PaintBucket = ({size = 24, className = "", ...props}: PaintBucketProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 3h8v2H8V3zm0 2H6v4H4v12h16V9h-2V5h-2v4H8V5zm8 6h2v8H6v-8h2v6h2v-4h2v2h2v-2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

PaintBucket.displayName = 'PaintBucket';
