import React from 'react';
export interface SharpCornerProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const SharpCorner: {
    ({ size, className, ...props }: SharpCornerProps): React.JSX.Element;
    displayName: string;
};
