import React from 'react';
export interface ImageProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Image: {
    ({ size, className, ...props }: ImageProps): React.JSX.Element;
    displayName: string;
};
