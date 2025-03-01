import React from 'react';
export interface ChartMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChartMinus: {
    ({ size, className, ...props }: ChartMinusProps): React.JSX.Element;
    displayName: string;
};
