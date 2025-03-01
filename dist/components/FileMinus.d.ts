import React from 'react';
export interface FileMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FileMinus: {
    ({ size, className, ...props }: FileMinusProps): React.JSX.Element;
    displayName: string;
};
