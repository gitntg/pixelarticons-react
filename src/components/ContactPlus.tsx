import React from 'react';

export interface ContactPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const ContactPlus = ({size = 24, className = "", ...props}: ContactPlusProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M2 3h22v11h-2V5H2v14h12v2H0V3h2zm8 4H6v4h4V7zm-6 6h8v4H4v-4zm16-6h-6v2h6V7zm-6 4h6v2h-6v-2zm3 4h-3v2h3v-2zm4 6v3h-2v-3h-3v-2h3v-3h2v3h3v2h-3z" fill="currentColor"/>
    </svg>
  );
};

ContactPlus.displayName = 'ContactPlus';
