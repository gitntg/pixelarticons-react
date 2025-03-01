import React from 'react';
export interface ZoomOutProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ZoomOut: {
    ({ size, className, ...props }: ZoomOutProps): React.JSX.Element;
    displayName: string;
};
