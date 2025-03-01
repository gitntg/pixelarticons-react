import React from 'react';
export interface GifProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Gif: {
    ({ size, className, ...props }: GifProps): React.JSX.Element;
    displayName: string;
};
