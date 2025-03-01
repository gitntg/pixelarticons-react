import React from 'react';
export interface PixelarticonsProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Pixelarticons: {
    ({ size, className, ...props }: PixelarticonsProps): React.JSX.Element;
    displayName: string;
};
