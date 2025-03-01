import React from 'react';
export interface CloudUploadProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CloudUpload: {
    ({ size, className, ...props }: CloudUploadProps): React.JSX.Element;
    displayName: string;
};
