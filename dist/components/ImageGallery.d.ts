import React from 'react';
export interface ImageGalleryProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ImageGallery: {
    ({ size, className, ...props }: ImageGalleryProps): React.JSX.Element;
    displayName: string;
};
