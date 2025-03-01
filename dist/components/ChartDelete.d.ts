import React from 'react';
export interface ChartDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChartDelete: {
    ({ size, className, ...props }: ChartDeleteProps): React.JSX.Element;
    displayName: string;
};
