import React from 'react';
export interface ImageBrokenProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ImageBroken: {
    ({ size, className, ...props }: ImageBrokenProps): React.JSX.Element;
    displayName: string;
};
