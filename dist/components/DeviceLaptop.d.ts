import React from 'react';
export interface DeviceLaptopProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const DeviceLaptop: {
    ({ size, className, ...props }: DeviceLaptopProps): React.JSX.Element;
    displayName: string;
};
