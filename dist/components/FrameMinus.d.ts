import React from 'react';
export interface FrameMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FrameMinus: {
    ({ size, className, ...props }: FrameMinusProps): React.JSX.Element;
    displayName: string;
};
