import React from 'react';

export interface LightbulbOnProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const LightbulbOn = ({size = 24, className = "", ...props}: LightbulbOnProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M13 2h-2v4h2V2Zm2 6H9v2H7v4h2v4h6v-4h2v-4h-2V8Zm0 2v4h-2v2h-2v-2H9v-4h6ZM9 20h6v2H9v-2Zm14-9v2h-4v-2h4ZM5 13v-2H1v2h4Zm12-7h2v2h-2V6Zm2 0h2V4h-2v2ZM5 6h2v2H5V6Zm0 0V4H3v2h2Z" />
    </svg>
  );
};

LightbulbOn.displayName = 'LightbulbOn';
