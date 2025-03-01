import React from 'react';
export interface StoreProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Store: {
    ({ size, className, ...props }: StoreProps): React.JSX.Element;
    displayName: string;
};
