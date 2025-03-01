import React from 'react';
export interface CocktailProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Cocktail: {
    ({ size, className, ...props }: CocktailProps): React.JSX.Element;
    displayName: string;
};
