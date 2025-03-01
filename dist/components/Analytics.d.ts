import React from 'react';
export interface AnalyticsProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Analytics: {
    ({ size, className, ...props }: AnalyticsProps): React.JSX.Element;
    displayName: string;
};
