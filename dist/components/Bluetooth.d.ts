import React from 'react';
export interface BluetoothProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Bluetooth: {
    ({ size, className, ...props }: BluetoothProps): React.JSX.Element;
    displayName: string;
};
