import React from 'react';
export interface DeviceTvSmartProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DeviceTvSmart: {
    ({ size, className, ...props }: DeviceTvSmartProps): React.JSX.Element;
    displayName: string;
};
