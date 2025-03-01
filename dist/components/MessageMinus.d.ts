import React from 'react';
export interface MessageMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageMinus: {
    ({ size, className, ...props }: MessageMinusProps): React.JSX.Element;
    displayName: string;
};
