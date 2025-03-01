import React from 'react';
export interface MessageDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageDelete: {
    ({ size, className, ...props }: MessageDeleteProps): React.JSX.Element;
    displayName: string;
};
