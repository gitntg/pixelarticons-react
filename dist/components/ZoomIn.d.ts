import React from 'react';
export interface ZoomInProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ZoomIn: {
    ({ size, className, ...props }: ZoomInProps): React.JSX.Element;
    displayName: string;
};
