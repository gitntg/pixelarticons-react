import React from 'react';
export interface FrameProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Frame: {
    ({ size, className, ...props }: FrameProps): React.JSX.Element;
    displayName: string;
};
