import React from 'react';
export interface VolumeMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const VolumeMinus: {
    ({ size, className, ...props }: VolumeMinusProps): React.JSX.Element;
    displayName: string;
};
