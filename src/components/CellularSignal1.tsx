import React from 'react';

export interface CellularSignal1Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CellularSignal1 = ({size = 24, className = "", ...props}: CellularSignal1Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 4v16h6V4h-6Zm2 2h2v12h-2V6Zm-9 4v10h6V10H9Zm2 8v-6h2v6h-2Zm-3-4H2v6h6v-6Z"/>
    </svg>
  );
};

CellularSignal1.displayName = 'CellularSignal1';
