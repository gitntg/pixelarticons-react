import React from 'react';
export interface ImageMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ImageMultiple: {
    ({ size, className, ...props }: ImageMultipleProps): React.JSX.Element;
    displayName: string;
};
