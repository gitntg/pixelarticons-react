import React from 'react';
export interface FolderPlusProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const FolderPlus: {
    ({ size, className, ...props }: FolderPlusProps): React.JSX.Element;
    displayName: string;
};
