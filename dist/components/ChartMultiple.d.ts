import React from 'react';
export interface ChartMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChartMultiple: {
    ({ size, className, ...props }: ChartMultipleProps): React.JSX.Element;
    displayName: string;
};
