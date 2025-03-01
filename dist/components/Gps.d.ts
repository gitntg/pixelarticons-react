import React from 'react';
export interface GpsProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Gps: {
    ({ size, className, ...props }: GpsProps): React.JSX.Element;
    displayName: string;
};
