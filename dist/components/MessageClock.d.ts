import React from 'react';
export interface MessageClockProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageClock: {
    ({ size, className, ...props }: MessageClockProps): React.JSX.Element;
    displayName: string;
};
