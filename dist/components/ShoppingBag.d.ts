import React from 'react';
export interface ShoppingBagProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ShoppingBag: {
    ({ size, className, ...props }: ShoppingBagProps): React.JSX.Element;
    displayName: string;
};
