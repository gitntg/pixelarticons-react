import React from 'react';
export interface FloatLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FloatLeft: {
    ({ size, className, ...props }: FloatLeftProps): React.JSX.Element;
    displayName: string;
};
