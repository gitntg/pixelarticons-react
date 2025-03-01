import React from 'react';
export interface BatteryFullProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BatteryFull: {
    ({ size, className, ...props }: BatteryFullProps): React.JSX.Element;
    displayName: string;
};
