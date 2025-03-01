import React from 'react';

export interface KanbanProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Kanban = ({size = 24, className = "", ...props}: KanbanProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M21 3H3v18h18V3zM5 19V5h14v14H5zM9 7H7v8h2V7zm2 0h2v4h-2V7zm6 0h-2v10h2V7z" fill="currentColor"/>
    </svg>
  );
};

Kanban.displayName = 'Kanban';
