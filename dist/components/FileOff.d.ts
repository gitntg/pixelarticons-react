import React from 'react';
export interface FileOffProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FileOff: {
    ({ size, className, ...props }: FileOffProps): React.JSX.Element;
    displayName: string;
};
