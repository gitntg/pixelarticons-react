import React from 'react';
export interface ImagePlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ImagePlus: {
    ({ size, className, ...props }: ImagePlusProps): React.JSX.Element;
    displayName: string;
};
