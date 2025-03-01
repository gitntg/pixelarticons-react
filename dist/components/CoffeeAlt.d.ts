import React from 'react';
export interface CoffeeAltProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CoffeeAlt: {
    ({ size, className, ...props }: CoffeeAltProps): React.JSX.Element;
    displayName: string;
};
