import React from 'react';

export interface DevicePhoneProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DevicePhone = ({size = 24, className = "", ...props}: DevicePhoneProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M6 3h12v18H6V3zm10 16V5h-2v2h-4V5H8v14h8zm-5-4h2v2h-2v-2z" fill="currentColor"/>
    </svg>
  );
};

DevicePhone.displayName = 'DevicePhone';
