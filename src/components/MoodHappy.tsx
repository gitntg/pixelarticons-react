import React from 'react';

export interface MoodHappyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const MoodHappy = ({size = 24, className = "", ...props}: MoodHappyProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M5 3h14v2H5V3zm0 16H3V5h2v14zm14 0v2H5v-2h14zm0 0h2V5h-2v14zM10 8H8v2h2V8zm4 0h2v2h-2V8zm-5 6v-2H7v2h2zm6 0v2H9v-2h6zm0 0h2v-2h-2v2z" fill="currentColor"/>
    </svg>
  );
};

MoodHappy.displayName = 'MoodHappy';
