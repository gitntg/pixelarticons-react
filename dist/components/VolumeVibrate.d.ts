import React from 'react';
export interface VolumeVibrateProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const VolumeVibrate: {
    ({ size, className, ...props }: VolumeVibrateProps): React.JSX.Element;
    displayName: string;
};
