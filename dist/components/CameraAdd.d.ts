import React from 'react';
export interface CameraAddProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CameraAdd: {
    ({ size, className, ...props }: CameraAddProps): React.JSX.Element;
    displayName: string;
};
