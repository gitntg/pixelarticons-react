import React from 'react';
export interface GitCommitProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const GitCommit: {
    ({ size, className, ...props }: GitCommitProps): React.JSX.Element;
    displayName: string;
};
