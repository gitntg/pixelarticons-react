import React from 'react';
export interface ChartProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Chart: {
    ({ size, className, ...props }: ChartProps): React.JSX.Element;
    displayName: string;
};
