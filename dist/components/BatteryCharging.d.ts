import React from 'react';
export interface BatteryChargingProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BatteryCharging: {
    ({ size, className, ...props }: BatteryChargingProps): React.JSX.Element;
    displayName: string;
};
