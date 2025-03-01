import React from 'react';
export interface VideoProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Video: {
    ({ size, className, ...props }: VideoProps): React.JSX.Element;
    displayName: string;
};
