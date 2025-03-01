import React from 'react';
export interface ChartAddProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChartAdd: {
    ({ size, className, ...props }: ChartAddProps): React.JSX.Element;
    displayName: string;
};
