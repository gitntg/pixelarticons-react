import React from 'react';

export interface CalculatorProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Calculator = ({size = 24, className = "", ...props}: CalculatorProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 2H3v20h18V2H5zm14 18H5V4h14v16zM17 6H7v4h10V6zM7 12h2v2H7v-2zm6 0h-2v2h2v-2zm2 0h2v2h-2v-2zm-6 4H7v2h2v-2zm2 0h2v2h-2v-2zm6 0h-2v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

Calculator.displayName = 'Calculator';
