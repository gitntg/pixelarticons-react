import React from 'react';
export interface CameraAltProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CameraAlt: {
    ({ size, className, ...props }: CameraAltProps): React.JSX.Element;
    displayName: string;
};
