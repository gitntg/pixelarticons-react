import React from 'react';
export interface DeviceTabletProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DeviceTablet: {
    ({ size, className, ...props }: DeviceTabletProps): React.JSX.Element;
    displayName: string;
};
