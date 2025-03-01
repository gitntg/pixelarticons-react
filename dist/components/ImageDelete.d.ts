import React from 'react';
export interface ImageDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ImageDelete: {
    ({ size, className, ...props }: ImageDeleteProps): React.JSX.Element;
    displayName: string;
};
