import React from 'react';
export interface GitBranchProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const GitBranch: {
    ({ size, className, ...props }: GitBranchProps): React.JSX.Element;
    displayName: string;
};
