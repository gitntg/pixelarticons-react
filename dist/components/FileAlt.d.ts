import React from 'react';
export interface FileAltProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FileAlt: {
    ({ size, className, ...props }: FileAltProps): React.JSX.Element;
    displayName: string;
};
