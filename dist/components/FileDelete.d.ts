import React from 'react';
export interface FileDeleteProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FileDelete: {
    ({ size, className, ...props }: FileDeleteProps): React.JSX.Element;
    displayName: string;
};
