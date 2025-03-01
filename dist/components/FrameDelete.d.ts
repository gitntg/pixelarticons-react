import React from 'react';
export interface FrameDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FrameDelete: {
    ({ size, className, ...props }: FrameDeleteProps): React.JSX.Element;
    displayName: string;
};
