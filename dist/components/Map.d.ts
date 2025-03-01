import React from 'react';
export interface MapProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Map: {
    ({ size, className, ...props }: MapProps): React.JSX.Element;
    displayName: string;
};
