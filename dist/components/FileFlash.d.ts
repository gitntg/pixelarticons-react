import React from 'react';
export interface FileFlashProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FileFlash: {
    ({ size, className, ...props }: FileFlashProps): React.JSX.Element;
    displayName: string;
};
