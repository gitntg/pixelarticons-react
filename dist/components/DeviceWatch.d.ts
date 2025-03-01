import React from 'react';
export interface DeviceWatchProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DeviceWatch: {
    ({ size, className, ...props }: DeviceWatchProps): React.JSX.Element;
    displayName: string;
};
