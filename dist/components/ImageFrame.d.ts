import React from 'react';
export interface ImageFrameProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ImageFrame: {
    ({ size, className, ...props }: ImageFrameProps): React.JSX.Element;
    displayName: string;
};
