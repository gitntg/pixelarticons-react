import React from 'react';
export interface VideoOffProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const VideoOff: {
    ({ size, className, ...props }: VideoOffProps): React.JSX.Element;
    displayName: string;
};
