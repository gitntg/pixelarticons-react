import React from 'react';
export interface CartProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Cart: {
    ({ size, className, ...props }: CartProps): React.JSX.Element;
    displayName: string;
};
