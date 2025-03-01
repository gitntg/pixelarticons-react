import React from 'react';
export interface FrameCheckProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FrameCheck: {
    ({ size, className, ...props }: FrameCheckProps): React.JSX.Element;
    displayName: string;
};
