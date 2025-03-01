import React from 'react';
export interface AudioDeviceProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const AudioDevice: {
    ({ size, className, ...props }: AudioDeviceProps): React.JSX.Element;
    displayName: string;
};
