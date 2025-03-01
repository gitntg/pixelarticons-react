import React from 'react';
export interface FileProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const File: {
    ({ size, className, ...props }: FileProps): React.JSX.Element;
    displayName: string;
};
