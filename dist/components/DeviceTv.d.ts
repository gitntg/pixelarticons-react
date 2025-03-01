import React from 'react';
export interface DeviceTvProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DeviceTv: {
    ({ size, className, ...props }: DeviceTvProps): React.JSX.Element;
    displayName: string;
};
