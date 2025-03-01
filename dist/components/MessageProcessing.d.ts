import React from 'react';
export interface MessageProcessingProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const MessageProcessing: {
    ({ size, className, ...props }: MessageProcessingProps): React.JSX.Element;
    displayName: string;
};
