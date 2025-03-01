import React from 'react';
export interface HourglassProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Hourglass: {
    ({ size, className, ...props }: HourglassProps): React.JSX.Element;
    displayName: string;
};
