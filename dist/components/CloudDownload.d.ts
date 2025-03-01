import React from 'react';
export interface CloudDownloadProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const CloudDownload: {
    ({ size, className, ...props }: CloudDownloadProps): React.JSX.Element;
    displayName: string;
};
