import React from 'react';
export interface ImageFlashProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ImageFlash: {
    ({ size, className, ...props }: ImageFlashProps): React.JSX.Element;
    displayName: string;
};
