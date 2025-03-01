import React from 'react';
export interface DownloadProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Download: {
    ({ size, className, ...props }: DownloadProps): React.JSX.Element;
    displayName: string;
};
