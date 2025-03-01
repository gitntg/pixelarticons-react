import React from 'react';
export interface MessageFlashProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageFlash: {
    ({ size, className, ...props }: MessageFlashProps): React.JSX.Element;
    displayName: string;
};
