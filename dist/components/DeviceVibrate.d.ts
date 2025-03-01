import React from 'react';
export interface DeviceVibrateProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DeviceVibrate: {
    ({ size, className, ...props }: DeviceVibrateProps): React.JSX.Element;
    displayName: string;
};
