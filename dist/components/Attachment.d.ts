import React from 'react';
export interface AttachmentProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Attachment: {
    ({ size, className, ...props }: AttachmentProps): React.JSX.Element;
    displayName: string;
};
