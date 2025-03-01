import React from 'react';
export interface PictureInPictureAltProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const PictureInPictureAlt: {
    ({ size, className, ...props }: PictureInPictureAltProps): React.JSX.Element;
    displayName: string;
};
