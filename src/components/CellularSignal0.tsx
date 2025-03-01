import React from 'react';

export interface CellularSignal0Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CellularSignal0 = ({size = 24, className = "", ...props}: CellularSignal0Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M22 4v16h-6V4h6Zm-2 2h-2v12h2V6Zm-5 4v10H9V10h6Zm-2 8v-6h-2v6h2Zm-5-4v6H2v-6h6Zm-2 4v-2H4v2h2Z"/>
    </svg>
  );
};

CellularSignal0.displayName = 'CellularSignal0';
