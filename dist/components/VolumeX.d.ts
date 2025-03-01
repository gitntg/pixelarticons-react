import React from 'react';
export interface VolumeXProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const VolumeX: {
    ({ size, className, ...props }: VolumeXProps): React.JSX.Element;
    displayName: string;
};
