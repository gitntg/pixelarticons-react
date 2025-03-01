import React from 'react';

export interface CellularSignalOffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CellularSignalOff = ({size = 24, className = "", ...props}: CellularSignalOffProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M4 2H2v2h2v2H2v2h2V6h2v2h2V6H6V4h2V2H6v2H4V2Zm12 2v16h6V4h-6Zm2 2h2v12h-2V6Zm-9 4v10h6V10H9Zm2 8v-6h2v6h-2Zm-3-4v6H2v-6h6Zm-2 4v-2H4v2h2Z"/>
    </svg>
  );
};

CellularSignalOff.displayName = 'CellularSignalOff';
