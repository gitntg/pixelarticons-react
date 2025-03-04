import React from 'react';

export interface PlaylistProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Playlist = ({size = 24, className = "", ...props}: PlaylistProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M10 13h6V5h6v4h-4v10h-8v-6zm2 2v2h4v-2h-4zM2 17h6v2H2v-2zm6-4H2v2h6v-2zM2 9h12v2H2V9zm12-4H2v2h12V5z" fill="currentColor"/>
    </svg>
  );
};

Playlist.displayName = 'Playlist';
