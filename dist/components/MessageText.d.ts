import React from 'react';
export interface MessageTextProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageText: {
    ({ size, className, ...props }: MessageTextProps): React.JSX.Element;
    displayName: string;
};
