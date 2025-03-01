import React from 'react';

export interface DeviceVibrateProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DeviceVibrate = ({size = 24, className = "", ...props}: DeviceVibrateProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M8 3H6v18h12V3H8zm8 2v14H8V5h8zm-3 10h-2v2h2v-2zm7-8h2v2h-2V7zm2 4V9h2v2h-2zm0 2h-2v-2h2v2zm0 2v-2h2v2h-2zm0 0v2h-2v-2h2zM2 17h2v-2H2v-2h2v-2H2V9h2V7H2v2H0v2h2v2H0v2h2v2z" fill="currentColor"/>
    </svg>
  );
};

DeviceVibrate.displayName = 'DeviceVibrate';
