import React from 'react';
export interface MessageArrowRightProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageArrowRight: {
    ({ size, className, ...props }: MessageArrowRightProps): React.JSX.Element;
    displayName: string;
};
