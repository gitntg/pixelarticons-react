import React from 'react';
export interface CameraFaceProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CameraFace: {
    ({ size, className, ...props }: CameraFaceProps): React.JSX.Element;
    displayName: string;
};
