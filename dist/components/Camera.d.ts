import React from 'react';
export interface CameraProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Camera: {
    ({ size, className, ...props }: CameraProps): React.JSX.Element;
    displayName: string;
};
