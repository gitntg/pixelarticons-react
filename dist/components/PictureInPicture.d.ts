import React from 'react';
export interface PictureInPictureProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const PictureInPicture: {
    ({ size, className, ...props }: PictureInPictureProps): React.JSX.Element;
    displayName: string;
};
