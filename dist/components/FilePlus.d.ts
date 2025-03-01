import React from 'react';
export interface FilePlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FilePlus: {
    ({ size, className, ...props }: FilePlusProps): React.JSX.Element;
    displayName: string;
};
