import React from 'react';
export interface FolderXProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FolderX: {
    ({ size, className, ...props }: FolderXProps): React.JSX.Element;
    displayName: string;
};
