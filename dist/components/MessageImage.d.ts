import React from 'react';
export interface MessageImageProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageImage: {
    ({ size, className, ...props }: MessageImageProps): React.JSX.Element;
    displayName: string;
};
