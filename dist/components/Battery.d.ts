import React from 'react';
export interface BatteryProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Battery: {
    ({ size, className, ...props }: BatteryProps): React.JSX.Element;
    displayName: string;
};
