import React from 'react';

export interface TrashAltProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const TrashAlt = ({size = 24, className = "", ...props}: TrashAltProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 2v4h6v2h-2v14H4V8H2V6h6V2h8zm-2 2h-4v2h4V4zm0 4H6v12h12V8h-4z" fill="currentColor"/>
    </svg>
  );
};

TrashAlt.displayName = 'TrashAlt';
