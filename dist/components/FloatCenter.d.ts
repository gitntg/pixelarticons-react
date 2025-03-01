import React from 'react';
export interface FloatCenterProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FloatCenter: {
    ({ size, className, ...props }: FloatCenterProps): React.JSX.Element;
    displayName: string;
};
