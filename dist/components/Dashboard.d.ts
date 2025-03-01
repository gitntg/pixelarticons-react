import React from 'react';
export interface DashboardProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Dashboard: {
    ({ size, className, ...props }: DashboardProps): React.JSX.Element;
    displayName: string;
};
