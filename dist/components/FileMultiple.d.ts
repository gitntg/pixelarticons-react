import React from 'react';
export interface FileMultipleProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FileMultiple: {
    ({ size, className, ...props }: FileMultipleProps): React.JSX.Element;
    displayName: string;
};
