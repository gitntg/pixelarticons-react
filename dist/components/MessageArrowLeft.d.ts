import React from 'react';
export interface MessageArrowLeftProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageArrowLeft: {
    ({ size, className, ...props }: MessageArrowLeftProps): React.JSX.Element;
    displayName: string;
};
