import React from 'react';

export interface SubscriptionsProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Subscriptions = ({size = 24, className = "", ...props}: SubscriptionsProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M18 2H6v2h12V2zM4 6h16v2H4V6zm-2 4h20v12H2V10zm18 10v-8H4v8h16z" fill="currentColor"/>
    </svg>
  );
};

Subscriptions.displayName = 'Subscriptions';
