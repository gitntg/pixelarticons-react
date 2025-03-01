import React from 'react';
export interface UploadProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Upload: {
    ({ size, className, ...props }: UploadProps): React.JSX.Element;
    displayName: string;
};
