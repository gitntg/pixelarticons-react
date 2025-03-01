import React from 'react';

export interface LayoutDistributeVerticalProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LayoutDistributeVertical = ({size = 24, className = "", ...props}: LayoutDistributeVerticalProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M20 6V4H4v2h16zm0 14v-2H4v2h16zM17 8v8h-2V8h2zm-8 6v-4h6V8H7v8h8v-2H9z" fill="currentColor"/>
    </svg>
  );
};

LayoutDistributeVertical.displayName = 'LayoutDistributeVertical';
