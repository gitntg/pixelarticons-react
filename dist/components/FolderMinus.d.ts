import React from 'react';
export interface FolderMinusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FolderMinus: {
    ({ size, className, ...props }: FolderMinusProps): React.JSX.Element;
    displayName: string;
};
