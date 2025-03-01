import React from 'react';
export interface MessageBookmarkProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageBookmark: {
    ({ size, className, ...props }: MessageBookmarkProps): React.JSX.Element;
    displayName: string;
};
