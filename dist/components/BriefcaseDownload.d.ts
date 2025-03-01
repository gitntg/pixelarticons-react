import React from 'react';
export interface BriefcaseDownloadProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BriefcaseDownload: {
    ({ size, className, ...props }: BriefcaseDownloadProps): React.JSX.Element;
    displayName: string;
};
