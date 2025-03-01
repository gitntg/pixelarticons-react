import React from 'react';

export interface CocktailProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const Cocktail = ({size = 24, className = "", ...props}: CocktailProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={`${className}`} 
      {...props}
    >
      <path d="M19 3H3v4h2v2h2v2h2v2h2v6H7v2h10v-2h-4v-6h2v-2h2V9h2V7h2V3h-2zm0 4H5V5h14v2z" fill="currentColor"/>
    </svg>
  );
};

Cocktail.displayName = 'Cocktail';
