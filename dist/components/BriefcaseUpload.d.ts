import React from 'react';
export interface BriefcaseUploadProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const BriefcaseUpload: {
    ({ size, className, ...props }: BriefcaseUploadProps): React.JSX.Element;
    displayName: string;
};
