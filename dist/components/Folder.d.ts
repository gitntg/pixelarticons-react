import React from 'react';
export interface FolderProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const Folder: {
    ({ size, className, ...props }: FolderProps): React.JSX.Element;
    displayName: string;
};
