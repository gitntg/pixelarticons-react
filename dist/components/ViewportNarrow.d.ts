import React from 'react';
export interface ViewportNarrowProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ViewportNarrow: {
    ({ size, className, ...props }: ViewportNarrowProps): React.JSX.Element;
    displayName: string;
};
