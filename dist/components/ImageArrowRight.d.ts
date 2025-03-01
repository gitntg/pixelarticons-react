import React from 'react';
export interface ImageArrowRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const ImageArrowRight: {
    ({ size, className, ...props }: ImageArrowRightProps): React.JSX.Element;
    displayName: string;
};
