import React from 'react';
export interface ImageNewProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ImageNew: {
    ({ size, className, ...props }: ImageNewProps): React.JSX.Element;
    displayName: string;
};
