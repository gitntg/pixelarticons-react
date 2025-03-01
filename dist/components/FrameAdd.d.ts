import React from 'react';
export interface FrameAddProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FrameAdd: {
    ({ size, className, ...props }: FrameAddProps): React.JSX.Element;
    displayName: string;
};
