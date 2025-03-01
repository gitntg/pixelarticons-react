import React from 'react';
export interface ChartBarProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ChartBar: {
    ({ size, className, ...props }: ChartBarProps): React.JSX.Element;
    displayName: string;
};
