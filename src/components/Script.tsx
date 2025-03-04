import React from 'react';

export interface ScriptProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Script = ({size = 24, className = "", ...props}: ScriptProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 3h14v2h2v6h-2v8h-2V5H6V3zm8 14v-2H6V5H4v10H2v4h2v2h14v-2h-2v-2h-2zm0 0v2H4v-2h10z" fill="currentColor"/>
    </svg>
  );
};

Script.displayName = 'Script';
