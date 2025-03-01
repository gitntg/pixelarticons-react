import React from 'react';
export interface MinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Minus: {
    ({ size, className, ...props }: MinusProps): React.JSX.Element;
    displayName: string;
};
