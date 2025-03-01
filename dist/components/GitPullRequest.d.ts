import React from 'react';
export interface GitPullRequestProps extends React.SVGProps<SVGSVGElement> {
    size?: number | string;
    className?: string;
}
export declare const GitPullRequest: {
    ({ size, className, ...props }: GitPullRequestProps): React.JSX.Element;
    displayName: string;
};
