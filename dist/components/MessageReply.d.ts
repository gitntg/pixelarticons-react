import React from 'react';
export interface MessageReplyProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageReply: {
    ({ size, className, ...props }: MessageReplyProps): React.JSX.Element;
    displayName: string;
};
