import React from 'react';

export interface NotificationProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Notification = ({size = 24, className = "", ...props}: NotificationProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M14 4V2h-4v2H5v2h14V4h-5zm5 12H5v-4H3v6h5v4h2v-4h4v2h-4v2h6v-4h5v-6h-2V6h-2v8h2v2zM5 6v8h2V6H5z" fill="currentColor"/>
    </svg>
  );
};

Notification.displayName = 'Notification';
