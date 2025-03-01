import React from 'react';
export interface DevicePhoneProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DevicePhone: {
    ({ size, className, ...props }: DevicePhoneProps): React.JSX.Element;
    displayName: string;
};
