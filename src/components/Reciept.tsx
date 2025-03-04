import React from 'react';

export interface RecieptProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Reciept = ({size = 24, className = "", ...props}: RecieptProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M3 2h2v2h2v2H5v14h14V6h-2V4h2V2h2v20H3V2zm12 2V2h2v2h-2zm-2 0h2v2h-2V4zm-2 0V2h2v2h-2zM9 4h2v2H9V4zm0 0V2H7v2h2zm8 4H7v2h10V8zM7 12h10v2H7v-2zm10 6v-2h-4v2h4z" fill="currentColor"/>
    </svg>
  );
};

Reciept.displayName = 'Reciept';
