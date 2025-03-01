import React from 'react';
export interface CoffeeProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Coffee: {
    ({ size, className, ...props }: CoffeeProps): React.JSX.Element;
    displayName: string;
};
