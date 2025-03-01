import React from 'react';
export interface ArrowBarUpProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ArrowBarUp: {
    ({ size, className, ...props }: ArrowBarUpProps): React.JSX.Element;
    displayName: string;
};
