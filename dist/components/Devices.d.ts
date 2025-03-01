import React from 'react';
export interface DevicesProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Devices: {
    ({ size, className, ...props }: DevicesProps): React.JSX.Element;
    displayName: string;
};
