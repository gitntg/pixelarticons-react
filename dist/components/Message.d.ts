import React from 'react';
export interface MessageProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Message: {
    ({ size, className, ...props }: MessageProps): React.JSX.Element;
    displayName: string;
};
