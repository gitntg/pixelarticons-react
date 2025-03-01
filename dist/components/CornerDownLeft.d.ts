import React from 'react';
export interface CornerDownLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CornerDownLeft: {
    ({ size, className, ...props }: CornerDownLeftProps): React.JSX.Element;
    displayName: string;
};
