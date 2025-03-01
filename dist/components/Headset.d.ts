import React from 'react';
export interface HeadsetProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Headset: {
    ({ size, className, ...props }: HeadsetProps): React.JSX.Element;
    displayName: string;
};
