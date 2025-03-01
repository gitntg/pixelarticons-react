import React from 'react';

export interface CellularSignal3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const CellularSignal3 = ({size = 24, className = "", ...props}: CellularSignal3Props) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M16 4h6v16h-6V4ZM2 14h6v6H2v-6Zm13-4H9v10h6V10Z"/>
    </svg>
  );
};

CellularSignal3.displayName = 'CellularSignal3';
