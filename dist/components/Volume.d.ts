import React from 'react';
export interface VolumeProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Volume: {
    ({ size, className, ...props }: VolumeProps): React.JSX.Element;
    displayName: string;
};
