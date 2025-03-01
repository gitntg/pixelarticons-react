import React from 'react';

export interface GamepadProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Gamepad = ({size = 24, className = "", ...props}: GamepadProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 5h20v14H2V5zm18 12V7H4v10h16zM8 9h2v2h2v2h-2v2H8v-2H6v-2h2V9zm6 0h2v2h-2V9zm4 4h-2v2h2v-2z" fill="currentColor"/>
    </svg>
  );
};

Gamepad.displayName = 'Gamepad';
