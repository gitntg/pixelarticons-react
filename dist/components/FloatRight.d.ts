import React from 'react';
export interface FloatRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FloatRight: {
    ({ size, className, ...props }: FloatRightProps): React.JSX.Element;
    displayName: string;
};
