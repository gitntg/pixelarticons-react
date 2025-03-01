import React from 'react';
export interface PercentProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Percent: {
    ({ size, className, ...props }: PercentProps): React.JSX.Element;
    displayName: string;
};
