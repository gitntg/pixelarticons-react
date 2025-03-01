import React from 'react';
export interface MessagePlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessagePlus: {
    ({ size, className, ...props }: MessagePlusProps): React.JSX.Element;
    displayName: string;
};
