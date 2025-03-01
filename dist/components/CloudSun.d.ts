import React from 'react';
export interface CloudSunProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CloudSun: {
    ({ size, className, ...props }: CloudSunProps): React.JSX.Element;
    displayName: string;
};
